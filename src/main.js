import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createSelector } from 'reselect';
import { createAction } from 'redux-actions';
import createSagaMiddleware from 'redux-saga';
import { call, select, take, put } from 'redux-saga/effects';
import watch from 'redux-watch';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  player: {
    position: {
      x: 0, y: 0
    }
  },
  other: {}
};

// ACTIONS
const Actions = {
  MOVE: 'MOVE',
};

// ACTION CREATORS
const move = createAction(Actions.MOVE, (x, y) => ({ x, y }));

// REDUCERS
const playerReducer = (state = initialState.player, action) => {
  switch (action.type) {
    case Actions.MOVE:
      let { position: { x, y } } = state;
      x += action.payload.x;
      y += action.payload.y;
      return { ...state, position: { x, y } };
  }
  return state;
};

const otherReducer = (state = initialState.other, action) => {
  return state;
};

// BOOTSTRAPPING
const reducer = combineReducers({
  player: playerReducer,
  other: otherReducer
});
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// SUBSCRIPTION
store.subscribe(() => {
  console.log(JSON.stringify(store.getState()));
});

// store.subscribe(watch(store.getState, 'player.position')((newVal, oldVal, objectPath) => {
  // console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
// }));

let w = watch(store.getState, 'player.position');
store.subscribe(w((newVal, oldVal, objectPath) => {
  console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
}));

// SAGAS
export function* gameSaga() {
  let playerAlive = true;
  while (playerAlive) {
    yield take(Actions.MOVE);
  }
}

sagaMiddleware.run(gameSaga);
store.dispatch(move(1, 1));
