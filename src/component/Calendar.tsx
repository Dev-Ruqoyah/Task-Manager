import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const Calendar = () => {
  const [selected, setSelected] = useState<Date>();

  return (
    <div>
      <DayPicker
        animate
        mode="multiple"
        navLayout="around"
       
      />
    </div>
  );
};

export default Calendar;
