import { RxDashboard } from "react-icons/rx";
import Navbar from "../component/Navbar";
import DateCard from "../component/card/DateCard";
import Header from "../component/Header";
import TaskCard from "../component/card/TaskCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { type TaskDetails } from "../app/TaskFormSlice";
import EmptyState from "../component/card/EmptyTaskCard";
import dayjs from "dayjs";
import { setIsCompleted } from "../app/TaskListSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const date = dayjs().format("D ddd");
  const taskList = useSelector((state: RootState) => state.taskList);

  // Checkbox states per task
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});

  const handleIsChecked = (event: React.FormEvent<HTMLInputElement>, taskId: string) => {
    const checked = (event.target as HTMLInputElement).checked;

    // Update local checkbox state
    setCheckedTasks((prev) => ({
      ...prev,
      [taskId]: checked,
    }));

    // Dispatch Redux update
    dispatch(setIsCompleted({ taskId, completed: checked }));
  };

  useEffect(() => {
    // Optionally sync checked states from store
    const initialChecked = taskList.reduce((acc, task) => {
      acc[task.id] = task.isCompleted || false;
      return acc;
    }, {} as Record<string, boolean>);
    setCheckedTasks(initialChecked);
  }, [taskList]);

  return (
    <>
      <div className="h-[22vh] px-3 py-6 bg-purple-500">
        <Navbar text={date} Icon={RxDashboard} />

        <div className="flex items-center text-white justify-between my-2">
          <div className="flex flex-col">
            <p className="text-xl">Today</p>
            <small>{taskList.length} Tasks</small>
          </div>
          <button
            onClick={() => navigate("/activity")}
            className="py-3 px-4 bg-white text-purple-500 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-300"
          >
            Add New
          </button>
        </div>
      </div>

      <div className="bg-white py-3 px-2 rounded-tl-4xl">
        <DateCard />
        <Header text="My Task" />
        <div className="task h-[60vh] overflow-y-scroll">
          {taskList.length === 0 ? (
            <EmptyState />
          ) : (
            taskList.map((task: TaskDetails) => (
              <div
                key={task.id}
                className="flex mb-2 rounded-xl hover:bg-purple-600 hover:text-white items-center px-3 bg-purple-200 justify-between"
              >
                <Link to={`task/${task.id}`}>
                  <TaskCard
                    taskdesc={task.taskDescription}
                    tasktitle={task.taskTitle}
                    tasktime={task.taskTime}
                  />
                </Link>
                <div className="com">
                  <input
                    type="checkbox"
                    name="taskstatus"
                    checked={!!checkedTasks[task.id]}
                    onChange={(e) => handleIsChecked(e, task.id)}
                    className="h-5 w-5 accent-purple-500"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
