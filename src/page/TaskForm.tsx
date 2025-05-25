import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../component/Navbar";
import Calendar from "../component/Calendar";
import CategoryCard from "../component/card/CategoryCard";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";
import { useEffect, useState, type JSX } from "react";
import {
  setDescription,
  setTask,
  setTaskCategory,
  type TaskDetails,
} from "../app/TaskFormSlice";
import { CiDumbbell, CiMusicNote1 } from "react-icons/ci";
import type { IconType } from "react-icons";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuNotebookTabs } from "react-icons/lu";
import { addTask, editTask } from "../app/TaskListSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { taskTime, taskDate } = useSelector((state: RootState) => state.task);
  const { categoryType } = useSelector((state: RootState) => state.category);
  const categoryMap: Record<string, IconType> = {
    Idea: HiOutlineLightBulb,
    Music: CiMusicNote1,
    Food: IoFastFoodOutline,
    Work: LuNotebookTabs,
    Sport: CiDumbbell,
  };
  const { taskId } = useParams();
  // console.log(taskId);

  const editingTaskList = useSelector((state: RootState) => state.taskList);
  const editingTask = editingTaskList.find(
    (edit: TaskDetails) => edit.id == taskId
  );
  // console.log(editingTask);
  const isEdited = editingTask?.isEdited || false;
  const taskTitle = editingTask?.taskTitle || "";
  const taskCategory = editingTask?.taskCategory || "";
  const taskDescription = editingTask?.taskDescription || "";

  // console.log(category.categoryType);

  // console.log(task);

  const [newTask, setNewTask] = useState<string>("");
  const [newDesc, setNewDesc] = useState<string>("");

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!newTask.trim() && !newDesc.trim()) {
    toast.error("Please provide task name or description.");
    return;
  }

  const newTaskObj: TaskDetails = {
    id: editingTask ? editingTask.id : Math.floor(Math.random() * 1000000),
    taskTitle: newTask,
    taskCategory: categoryType,
    taskDescription: newDesc,
    taskTime: taskTime,
    taskDate: taskDate,
    isCompleted: editingTask?.isCompleted || false,
    isEdited: editingTask ? true : false,
  };

  if (editingTask) {
    dispatch(editTask({ taskId: editingTask.id, newTaskObj }));
    toast.success("Task Edited Successfully");
  } else {
    dispatch(addTask(newTaskObj));
    toast.success("Task Added Successfully");
  }
  navigate("/");
};


  useEffect(() => {
    if (editingTask) {
      setNewTask(taskTitle);
      setNewDesc(taskDescription);
      setTaskCategory(taskCategory)
      // dispatch(setTaskCategory(editingTask.taskCategory)); // If needed
    }
  }, [editingTask]);

  return (
    <>
      <div className="bg-white/8 text-black px-4 py-3">
        <div className="header ">
          <Navbar text="Create Task" Icon={FaArrowLeft} />
        </div>
        <div className="caledar  flex items-center justify-center ">
          <Calendar />
        </div>
        <div>
          <CategoryCard
            Icon={categoryMap[categoryType] || HiOutlineLightBulb}
            categoryType={isEdited ? taskCategory : categoryType}
          />

          <form
            className="mt-1"
            onSubmit={(e) => {
              e.preventDefault(); // prevent default form submit
              handleSubmit(e); // call your submit handler
              navigate("/"); // navigate after submission
            }}
          >
            <div className="border py-4 rounded-md border-purple-400 px-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full outline-0"
                value={newTask}
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
              />
            </div>
            <div className="border  rounded-md border-purple-400  mt-3">
              <textarea
                name=""
                id=""
                placeholder="Task Description"
                onChange={(e) => {
                  setNewDesc(e.target.value);
                }}
                className="w-full py-4 px-3 outline-0"
                value={newDesc}
              ></textarea>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="py-3 px-2 rounded-md text-white bg-purple-400 hover:bg-purple-600 transition-all duration-300 w-full"
              >
                {isEdited ? "Edit Task" : "Create Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
