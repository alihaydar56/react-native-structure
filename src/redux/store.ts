import AsyncStorage from "@react-native-async-storage/async-storage";
import {configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import tempReducer from './temp/reducer'

const rootReducer=combineReducers({
    tempReducer,
})

const persistConfig={
    key:'root',
    storage:AsyncStorage,
    timeout:null,
    blacklist:['tempReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

let persistor = persistStore(store);

export { store, persistor };