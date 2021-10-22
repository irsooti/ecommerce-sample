import createSagaMiddleware from "@redux-saga/core";
import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import shopReducer from './shopSlice'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        shop: shopReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk:false}), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch