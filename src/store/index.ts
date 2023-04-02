import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { rootSaga } from "./sagas/rootSaga";

const rootReducer = combineReducers({
  todoReducer
})

const saga = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(saga))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

saga.run(rootSaga)



