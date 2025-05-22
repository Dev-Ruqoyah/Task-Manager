import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from './TaskFormSlice'
import CategoryReducer from './CategorySlice'
import TaskListReducer from './TaskListSlice'
export const store = configureStore({
    reducer:{
        task: TaskReducer,
        category:CategoryReducer,
        taskList:TaskListReducer
    }
})
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("taskList", JSON.stringify(state.taskList));
});
export type RootState = ReturnType<typeof store.getState>
export type AppState = typeof store.dispatch