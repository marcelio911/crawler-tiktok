import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import loggerMiddleware from 'redux-logger';
import { persistReducer } from 'redux-persist';
import reducers from './reducers';
import rootSaga from './sagas';

const persistedReducer = persistReducer(
  reducers.rootPersistConfig,
  reducers.rootReducer,
);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

middlewares.push(sagaMiddleware);
// middlewares.push(loggerMiddleware);

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);
export default store;
