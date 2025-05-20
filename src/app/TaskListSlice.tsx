import { createSlice } from "@reduxjs/toolkit";
import type { TaskDetails } from "./TaskFormSlice";

const initialState: TaskDetails[] =[]
const TaskListSlice =  createSlice({
    name:"taskList",
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload)
        }
    }

})

export const {addTask} = TaskListSlice.actions
export default TaskListSlice.reducer