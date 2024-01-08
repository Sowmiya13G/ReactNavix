/* eslint-disable prettier/prettier */
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import itemReducer from './features/ItemSlice';
import productReducer from './features/ProductSlice';
import formDataSlice from './features/FormDataSlice'
import {persistStore, persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['items', 'products'],
};

const rootReducer = combineReducers({
  products: productReducer,
  items: itemReducer,
  formData: formDataSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    // serializableCheck: {
    //   ignoredActions: ['persist/PERSIST'],
    // },
  }),
});

export const persistor = persistStore(store);
