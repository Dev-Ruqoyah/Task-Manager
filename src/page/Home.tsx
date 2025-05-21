import { RxDashboard } from "react-icons/rx";
import Navbar from "../component/Navbar";
import DateCard from "../component/card/DateCard";
import Header from "../component/Header";
import TaskCard from "../component/card/TaskCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import type { TaskDetails } from "../app/TaskFormSlice";
import  EmptyState from "../component/card/EmptyTaskCard";

const Home = () => {
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate("/activity")
    
  }
  // const [taskLists,setTaskList] = useState<[]>()

  const taskList = useSelector((state:RootState) => state.taskList)
  console.log(taskList);
  useEffect(()=>{
    console.log(taskList);
    // setTaskList(taskList)
    
  },[taskList])
  
  return (
    <>
      <div className=" h-[22vh] px-3 py-6 bg-purple-500">
        {/* NavBars */}
        <Navbar text={"14 Sept"} Icon={RxDashboard} />

        {/* MiddleBars */}
        <div className="flex items-center text-white justify-between my-2">
          <div className="flex flex-col">
            <p className="text-xl">Today</p>
            <small>6 Tasks</small>
          </div>
          <button onClick={()=>handleClick()}  className="py-3 px-4 bg-white text-purple-500 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-300">
            Add New
          </button>
        </div>
      </div>
      <div className="bg-white  py-3 px-2 rounded-tl-4xl">
        <DateCard />
        <Header text="My Task" />
        <div className="task h-[60vh] overflow-y-scroll">
          {taskList.length === 0? (<EmptyState/>) : (taskList.map((task:TaskDetails)=>(
            <TaskCard key={task.id}  taskdesc={task.taskDescription} tasktitle={task.taskTitle} tasktime={task.taskTime} />
          )))}
        </div>
      
      </div>
    </>
  );
};

export default Home;
