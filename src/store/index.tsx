import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create redux store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// run saga middleware
sagaMiddleware.run(rootSaga);

// create persistStore
const persistor = persistStore(store);

export { store, persistor };
