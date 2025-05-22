import React from 'react';
import type { TaskDetails } from '../../app/TaskFormSlice';



interface TaskViewCardProps {
  task: TaskDetails;
  onEdit?: () => void;
  onDelete?: () => void;
  
}

const TaskViewCard: React.FC<TaskViewCardProps> = ({ task, onEdit, onDelete }) => {
  const formattedDate = task.taskDate
    ? new Date(task.taskDate).toLocaleDateString()
    : 'No date provided';

  return (
    <div className="bg-purple-100 hover:bg-purple-200 transition-all duration-200 text-purple-900 shadow-xl rounded-2xl p-8 w-full max-w-2xl mx-auto border-l-4 border-purple-500 min-h-[250px]">
      {/* Title & Status */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold">{task.taskTitle}</h2>
          <p className="text-base text-purple-600 font-medium mt-1">{task.taskCategory}</p>
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            task.isCompleted ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
          }`}
        >
          {task.isCompleted ? 'Completed' : 'Pending'}
        </span>
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">{task.taskDescription}</p>
      </div>

      {/* Date & Time */}
      <div className="flex justify-between text-sm text-purple-800 font-semibold mb-6">
        <span>📅 {formattedDate}</span>
        <span>⏰ {task.taskTime}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <button
          onClick={onEdit}
          className="text-sm px-5 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-sm px-5 py-2 rounded-md bg-red-400 text-white hover:bg-red-500 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskViewCard;
