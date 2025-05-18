import { createSlice } from "@reduxjs/toolkit"

const initialValue = {task:"",taskCategory:"",taskDescription:""}

const TaskSlice = createSlice({
    name: "task",
    initialValue,
    reducers:{
        setTask:(state,action)=>{
            state.task = action.payload
        },
        setDescription:(state,action)=>{
            state.task = action.payload
        }
    }
})
export const {setTask} = TaskSlice.actions
export default TaskSlice.reducer