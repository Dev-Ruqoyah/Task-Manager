import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../component/Navbar";
import Calendar from "../component/Calendar";


const TaskForm = () => {
  return (
    <>
      <div className="bg-white/8 text-black px-3 py-6">
        <div className="header ">
          <Navbar text="Create Task" Icon={FaArrowLeft} />
        </div>
        <div className="caledar">
            <Calendar/>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
