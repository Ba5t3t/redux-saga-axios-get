import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { userReducer } from './userReducer'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, combineReducers } from 'redux'
import { rootWatcher } from '../saga/watchers'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    users: userReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootWatcher)