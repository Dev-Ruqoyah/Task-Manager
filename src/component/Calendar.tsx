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
        footer={
          selected
            ? `Selected: ${selected.toLocaleDateString()}`
            : "Pick a day."
        }
      />
    </div>
  );
};

export default Calendar;
