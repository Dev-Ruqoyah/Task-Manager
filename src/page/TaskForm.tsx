import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../component/Navbar";
import Calendar from "../component/Calendar";
import CategoryCard from "../component/card/CategoryCard";
import { HiOutlineLightBulb } from "react-icons/hi";

const TaskForm = () => {
  return (
    <>
      <div className="bg-white/8 text-black px-3 py-6">
        <div className="header ">
          <Navbar text="Create Task" Icon={FaArrowLeft} />
        </div>
        <div className="caledar flex items-center justify-center ">
          <Calendar />
        </div>
        <div>
          <CategoryCard
            Icon={HiOutlineLightBulb}
            categoryType="Idea"
           
          />

          <form className="mt-2">
            <div className="border py-4 rounded-md border-purple-400 px-3">
              <input type="text" placeholder="Name" />
            </div>
            <div className="border py-6 rounded-md border-purple-400 px-3 mt-3">
              <textarea name="" id="" placeholder="Task Description"></textarea>
            </div>
            <div className="mt-2">
              <button className="py-3 px-2 rounded-md text-white bg-purple-400 hover:bg-purple-600 transition-all duration-300 w-full">Create Task</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
