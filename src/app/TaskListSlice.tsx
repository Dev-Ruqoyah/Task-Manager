import { createSlice } from "@reduxjs/toolkit";
import type { TaskDetails } from "./TaskFormSlice";

const initialState: TaskDetails[] = JSON.parse(
  localStorage.getItem("taskList") || "[]"
);

const TaskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    setIsCompleted: (state, action) => {
      const { taskId, completed } = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task) {
        task.isCompleted = completed;
      }
    },
    removeTask: (state, action) => {
      const { taskId } = action.payload;
      const task = state.filter((task) => task.id !== taskId);
      return task;
    },

    markTaskEditing: (state, action) => {
      const { taskId,edited } = action.payload;
      const task = state.find((task) => task.id === taskId);
        if (task) {
        task.isEdited = edited;
      }
    },
    editTask: (state, action) => {
      const { taskId, newTaskObj } = action.payload;
      const index = state.findIndex(task => task.id === taskId);
      if (index !== -1) state[index] = newTaskObj;
    },
  },
});

export const { addTask, setIsCompleted, removeTask,editTask,markTaskEditing } = TaskListSlice.actions;
export default TaskListSlice.reducer;
