import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createSelector } from 'reselect';
import { createAction } from 'redux-actions';
import createSagaMiddleware from 'redux-saga';
import { call, select, take, put } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  hero: {
    xp: 0,
    level: 1,
    position: {
      x: 0,
      y: 0
    },
    stats: {
      health: 50,
      maxHealth: 50
    },
    inventory: {
      potions: 1
    }
  },
  monster: {}
};

const levels = [
  { xp:    0, maxHealth: 50 },
  { xp:  100, maxHealth: 55 },
  { xp:  250, maxHealth: 60 },
  { xp:  500, maxHealth: 67 },
  { xp: 1000, maxHealth: 75 }
];

// ACTIONS
const Actions = {
	GAIN_XP: 'GAIN_XP',
  LEVEL_UP: 'LEVEL_UP',
  MOVE: 'MOVE',
  DRINK_POTION: 'DRINK_POTION',
  TAKE_DAMAGE: 'TAKE_DAMAGE'
};

// ACTION CREATORS
const gainXp = createAction(Actions.GAIN_XP);
const levelUp = createAction(Actions.LEVEL_UP);
const move = createAction(Actions.MOVE, (x, y) => ({ x, y }));
const drinkPotion = createAction(Actions.DRINK_POTION);
const takeDamage = createAction(Actions.TAKE_DAMAGE);

// REDUCERS
const heroReducer = (state = initialState.hero, action) => {
  const { stats, inventory } = state;

  switch (action.type) {
    case Actions.GAIN_XP:
      const xp = state.xp + action.payload;
      return { ...state, xp };
    case Actions.LEVEL_UP:
      const level = state.level + 1;
      return { ...state, level };
    case Actions.MOVE:
      let { position: { x, y } } = state;
      x += action.payload.x;
      y += action.payload.y;
      return { ...state, position: { x, y } };
    case Actions.DRINK_POTION:
      return {
        ...state,
        stats: statsReducer(stats, action),
        inventory: inventoryReducer(inventory, action)
      };
    case Actions.TAKE_DAMAGE:
      return {
        ...state,
        stats: statsReducer(stats, action)
      };
  }
  return state;
};

const statsReducer = (state = initialState.hero.stats, action) => {
  let { health, maxHealth } = state;

  switch (action.type) {
    case Actions.DRINK_POTION:
      health = Math.min(health + 20, maxHealth);
      return { ...state, health, maxHealth };
    case Actions.TAKE_DAMAGE:
      health = Math.max(0, health - action.payload);
      return { ...state, health };
  }
  return state;
};

const inventoryReducer = (state = initialState.hero.inventory, action) => {
  let { potions } = state;

  switch (action.type) {
    case Actions.DRINK_POTION:
      potions = Math.max(0, potions - 1);
      return { ...state, potions };
  }
  return state;
}

const monsterReducer = (state = initialState.monster, action) => {
  // Coming soon...
  return state;
}

// SELECTORS
const getXp = state => state.hero.xp;
const getHealth = state => state.hero.stats.health;

const getLevel = createSelector(
  getXp,
  xp => levels.filter(level => xp >= level.xp).length
);

const getMaxHealth = createSelector(
  getLevel,
  l => levels[l].maxHealth
);

const isHealthLow = createSelector(
 [ getHealth, getMaxHealth ],
 (health, maxHealth) => health <= maxHealth * .15
);

// BOOTSTRAPPING
const reducer = combineReducers({
  hero: heroReducer,
  monster: monsterReducer,
});
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

store.subscribe(() => {
  console.log(JSON.stringify(store.getState()));
});

// RUN
export function* gameSaga() {
  let playerAlive = true;
  console.log('playerAlive', playerAlive);
  while (playerAlive) {
    yield take(Actions.MOVE);
    console.log('We have moved');

    const location = yield select(getLocation);
    if (location.safe) continue;

    const monsterProbability = yield call(Math.random);
    if (monsterProbability < location.encounterThreshold) continue;

    // Fight the monster
    playerAlive = yield call(fightSaga);
  }
}

export function* fightSaga() {
  const monster = yield select(getMonster);

  while (true) {
    // Monster attack sequence
    yield call(monsterAttackSaga, monster);

    // is player dead? return false
    const playerHealth = yield select(getHealth);
    if (playerHealth <= 0) return false;

    // player fight options
    yield call(playerFightOptionsSaga);

    // is monster dead? return true
    const monsterHealth = yield select(getMonsterHealth);
    if (monsterHealth <= 0) return true;
  }
}

export function* monsterAttackSaga(monster) {
  yield call(delay, 1000);

  // generate a random damage amount
  let damage = monster.strength;
  const critProbability = yield call(Math.random);
  if (critProbability >= monster.critThreshold) damage *= 2;

  // play an attack animation
  yield put(animateMonsterAttack(damage));
  yield call(delay, 1000);

  // apply damage to the player
  yield put(takeDamage(damage));
}

export function* playerFightOptionsSaga() {
  const { attack, heal, escape } = yield race({
    attack: take(Actions.ATTACK),
    heal: take(Actions.DRINK_POTION),
    escape: take(Actions.RUN_AWAY)
  });

  if (attack) yield call(playerAttackSaga);
  if (heal) yield call(playerHealSaga);
  if (escape) yield call(playerEscapeSaga);
}

export function* metaSaga() {
  // wait for assets to load
  // show intro screen
  // wait for player to start game

  // play the game and also watch for load game
  while (true) {
    yield race({
      play: call(gameSaga),
      load: take(Actions.LOAD_GAME)
    });
  }
}

sagaMiddleware.run(gameSaga);
store.dispatch(move(1, 1));
