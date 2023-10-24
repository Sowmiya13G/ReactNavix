import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {productsReducer, cartReducer} from '../reducers/reducer';
import userReducer from '../reducers/userReducer';
import rootSaga from '../sagas/sagas';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage
  whitelist: ['cart'], // Add the reducer(s) you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
