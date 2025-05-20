import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import React, { ChangeEventHandler, useState } from "react";

import { setHours, setMinutes } from "date-fns";
import { useDispatch } from "react-redux";
import { setTaskDate, setTaskTime } from "../app/TaskFormSlice";

const Calendar = () => {
  const [selected, setSelected] = useState<Date>();
  const [timeValue, setTimeValue] = useState<string>("00:00");

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const time = e.target.value;
    console.log(time);
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
    dispatch(setTaskDate(newDate.toISOString()))
  };

  const dispatch = useDispatch();

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
