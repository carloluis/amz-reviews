import { createStore, applyMiddleware } from 'redux';
import { sagaMiddleware, runSagas } from './sagas';
import rootReducer from './reducers';

// tmp logger
const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.info('%c action', 'color: blue', action);
    const result = next(action);

    console.info('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return result;
};

const middlewares = [loggerMiddleware, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

runSagas();

export default store;
