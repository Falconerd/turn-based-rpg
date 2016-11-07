import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createSelector } from 'reselect';
import { createAction, handleActions } from 'redux-actions';
import createSagaMiddleware from 'redux-saga';
import { call, select, take, put } from 'redux-saga/effects';
import watch from 'redux-watch';
import Gloop from 'gloop';
import GameInputs from 'game-inputs';

const initialState = {
  entities: {},
  other: {}
};

const Actions = {
  ENTITY_CREATE: 'ENTITY_CREATE',
  ENTITY_MOVE: 'ENTITY_MOVE',
  ENTITY_UPDATE_VELOCITY: 'ENTITY_UPDATE_VELOCITY'
};

// ACTION CREATORS
const actionEntityCreate = createAction(Actions.ENTITY_CREATE, components => ({ components }));
const actionEntityMove = createAction(Actions.ENTITY_MOVE, (id, x, y) => ({ id, x, y }));
const actionEntityUpdateVelocity = createAction(Actions.ENTITY_UPDATE_VELOCITY, (id, x, y) => ({ id, x, y }))

// REDUCERS
const entityReducer = (state = initialState.entities, action) => {
  let x, y, velX, velY;
  switch (action.type) {
    case Actions.ENTITY_CREATE:
      return {
        ...state,
        [Object.keys(state).length]: {
          ...action.payload.components
        }
      };
    case Actions.ENTITY_MOVE:
      x = state[action.payload.id].position.x;
      y = state[action.payload.id].position.y;
      velX = state[action.payload.id].velocity.x;
      velY = state[action.payload.id].velocity.y;
      if (velX !== 0 || velY !== 0) {
        return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            position: {
              x: x + action.payload.x,
              y: y + action.payload.y
            }
          }
        };
      } else {
        return state;
      }
    case Actions.ENTITY_UPDATE_VELOCITY:
      x = state[action.payload.id].velocity.x;
      y = state[action.payload.id].velocity.y;
      if (x !== action.payload.x || y !== action.payload.y) {
        return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            velocity: {
              x: action.payload.x,
              y: action.payload.y
            }
          }
        };
      } else {
        return state;
      }
  }
  return state;
}

const otherReducer = (state = initialState.other, action) => (state);

// BOOTSTRAPPING
const reducer = combineReducers({
  entities: entityReducer,
  other: otherReducer
});

const store = createStore(reducer);

store.subscribe(() => {
  console.log('state', JSON.stringify(store.getState()));
});

// SYSTEMS

const physicsSystem = entities => {
  // Fall if not grounded
  // Disabled for now due to console spam
  for (let i in entities) {
    // store.dispatch(move(i, 0, 9.8));
  }
};

const movementSystem = entities => {
  for (let i in entities) {
    if (entities[i].velocity.x || entities[i].velocity.y) {
      store.dispatch(actionEntityMove(i, entities[i].velocity.x, entities[i].velocity.y));
    }
  }
};

const input = GameInputs(document.body);

input.bind('move-left', 'A', '<left>');
input.bind('move-right', 'D', '<right>');

const handleInput = () => {
  if (input.state['move-left']) {
    store.dispatch(actionEntityUpdateVelocity(0, -5, 0));
  } else if (input.state['move-right']) {
    store.dispatch(actionEntityUpdateVelocity(0, 5, 0));
  } else {
    const { x, y } = selectVelocity(0, store.getState().entities);
    if (x || y) store.dispatch(actionEntityUpdateVelocity(0, 0, 0));
  }
};

const loop = new Gloop();

loop.on('tick', dt => {
  physicsSystem(store.getState().entities);
  movementSystem(store.getState().entities);
  handleInput();
});

loop.start();

// SELECTORS
const selectPosition = (id, state) => state[id].position;
const selectVelocity = (id, state) => state[id].velocity;

const Components = {
  position: (x = 0, y = 0) => ({ x, y }),
  velocity: (x = 0, y = 0) => ({ x, y }),
  body: (grounded = false) => ({ grounded }),
  sprite: (path, x, y) => ({ path, x, y })
}

// CREATE PLAYER
store.dispatch(actionEntityCreate({
  position: Components.position(),
  velocity: Components.velocity(),
  body: Components.body(true)
}));
