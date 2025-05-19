import { createSlice } from "@reduxjs/toolkit"
export interface TaskDetails {
    task:string,
    taskCategory:string,
    taskDescription:string,
    taskTime:TimeRanges
    TaskDate:Date
}

const initialState:TaskDetails = {task:"",taskCategory:"",taskDescription:""}

const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers:{
        setTask:(state,action)=>{
            state.task = action.payload
        },
        setDescription:(state,action)=>{
            state.taskDescription = action.payload
        },
        setTaskCategory:(state,action)=>{
            state.taskCategory = action.payload
        }
    }
})
export const {setTask,setDescription,setTaskCategory} = TaskSlice.actions
export default TaskSlice.reducer