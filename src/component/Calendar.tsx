import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import React, {type ChangeEventHandler, useEffect, useState } from "react";

import { setHours, setMinutes } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  setTaskDate,
  setTaskTime,
  type TaskDetails,
} from "../app/TaskFormSlice";
import { useParams } from "react-router-dom";
import type { RootState } from "@reduxjs/toolkit/query";

const Calendar = () => {
  const [selected, setSelected] = useState<Date>();
  const [timeValue, setTimeValue] = useState<string>("00:00");

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const time = e.target.value;
    // console.log(time);
    dispatch(setTaskTime(time));

    if (!selected) {
      setTimeValue(time);
      return;
    }
    const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
    const newSelectedDate = setHours(setMinutes(selected, minutes), hours);
    setSelected(newSelectedDate);
    setTimeValue(time);
  };

  const handleDaySelect = (date: Date | undefined) => {
    if (!timeValue || !date) {
      setSelected(date);
      return;
    }
    const [hours, minutes] = timeValue
      .split(":")
      .map((str) => parseInt(str, 10));
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes
    );
    setSelected(newDate);
    dispatch(setTaskDate(newDate.toISOString()));
  };

  const dispatch = useDispatch();
  const { taskId } = useParams();
  // console.log(taskId);

  const editingTaskList = useSelector((state: RootState) => state.taskList);
  const editingTask = editingTaskList.find(
    (edit: TaskDetails) => edit.id == taskId
  );
  // console.log(editingTask);
  const taskTime = editingTask?.taskTime || "";

  useEffect(() => {
    if (editingTask) {
      setTimeValue(taskTime);
    }
  }, [editingTask]);

  return (
    <div>
      <form>
        <input
          type="time"
          value={timeValue}
          onChange={handleTimeChange}
          className="border border-purple-400 w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Set the time"
        />
      </form>
      <DayPicker
        mode="single"
        animate
        navLayout="around"
        selected={selected}
        onSelect={handleDaySelect}
      />
    </div>
  );
};

export default Calendar;
