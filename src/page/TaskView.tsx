import React from "react";
import Navbar from "../component/Navbar";
import { RxDashboard } from "react-icons/rx";
import DateCard from "../component/card/DateCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";
import type { TaskDetails } from "../app/TaskFormSlice";
import TaskViewCard from "../component/card/TaskViewCard";
import { editTask, removeTask } from "../app/TaskListSlice";
import { toast } from "sonner";

const TaskView = () => {
  const { id } = useParams();
  const navigate =  useNavigate()
  const taskList = useSelector((state: RootState) => state.taskList);
  //   const newTask = taskList.find((task:TaskDetails) => task.id === id)
  const newTask = taskList.find((task: TaskDetails) => task.id == id);

  const dispatch = useDispatch();
  const handleDelete = (taskId: string) => {
    console.log("delete");
    dispatch(removeTask({taskId}));
    toast("Task Deleted")
    navigate("/")
  };

  const handleEdit = (taskId:number) =>{
      dispatch(editTask({taskId}))
  }
  return (
    <>
      <div className="bg-white-8 p-5">
        <div className="header">
          <Navbar text="Task Details" Icon={RxDashboard} />
          <DateCard />
        </div>

        <div className="pt-6">
          <TaskViewCard
            task={newTask}
            onEdit={() => console.log("Edit")}
            onDelete={() => handleDelete(newTask.id)}
          />
        </div>
      </div>
    </>
  );
};

export default TaskView;
