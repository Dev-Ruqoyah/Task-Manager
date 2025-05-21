import React from "react";

interface TaskDetails {
  tasktime: string;
  tasktitle: string;
  taskdesc: string;
}
const TaskCard: React.FC<TaskDetails> = ({ taskdesc, tasktime, tasktitle }) => {
  return (
    <div className="bg-purple-200 text-black px-2 py-3 my-2 rounded-xl hover:bg-purple-600 hover:text-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="time">
            <p>{tasktime}</p>
          </div>
          <div className="type flex flex-col">
            <h4 className="text-md font-semibold">{tasktitle}</h4>
            <small>{taskdesc}</small>
          </div>
        </div>
        <div className="com">
          <input type="checkbox" name="taskstatus" className="h-5 w-5 accent-purple-500" id="" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
