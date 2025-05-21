import React from "react";
import Navbar from "../component/Navbar";
import { RxDashboard } from "react-icons/rx";
import DateCard from "../component/card/DateCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";
import type { TaskDetails } from "../app/TaskFormSlice";
import TaskViewCard from "../component/card/TaskViewCard";

const TaskView = () => {
  const { id } = useParams();
  const taskList = useSelector((state: RootState) => state.taskList);
  //   const newTask = taskList.find((task:TaskDetails) => task.id === id)
  const newTask = taskList.find((task: TaskDetails) => task.id == id);

  console.log(newTask);

  return (
    <>
      <div className="bg-white-8">
        <div className="header">
          <Navbar text="Task Details" Icon={RxDashboard} />
          <DateCard />
        </div>


      <div className="pt-6">
          <TaskViewCard
          task={newTask}
          isCompleted={true}
          onEdit={() => console.log("Edit Task")}
          onDelete={() => console.log("Delete Task")}
        />
      </div>
      </div>
    </>
  );
};

export default TaskView;
