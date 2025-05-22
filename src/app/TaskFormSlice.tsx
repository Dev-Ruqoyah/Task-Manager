import { createSlice } from "@reduxjs/toolkit";
export interface TaskDetails {
  id: string;
  taskTitle: string;
  taskCategory: string;
  taskDescription: string;
  taskTime: string;
  taskDate: Date | string | null;
  isCompleted: boolean;
}

const initialState: TaskDetails = {
  id: "",
  taskTitle: "",
  taskCategory: "",
  taskDescription: "",
  taskTime: "12:00",
  taskDate: new Date().toISOString(),
  isCompleted: false,
};

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.taskTime = action.payload;
    },
    setDescription: (state, action) => {
      state.taskDescription = action.payload;
    },
    setTaskCategory: (state, action) => {
      state.taskCategory = action.payload;
    },
    setTaskTime: (state, action) => {
      state.taskTime = action.payload;
    },
    setTaskDate: (state, action) => {
      state.taskDate = action.payload;
    },
   
  },
});
export const {
  setTask,
  setDescription,
  setTaskCategory,
  setTaskTime,
  setTaskDate,
} = TaskSlice.actions;
export default TaskSlice.reducer;
