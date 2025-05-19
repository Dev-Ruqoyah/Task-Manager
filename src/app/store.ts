import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from './TaskFormSlice'
import CategoryReducer from './CategorySlice'

export const store = configureStore({
    reducer:{
        task: TaskReducer,
        category:CategoryReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppState = typeof store.dispatch