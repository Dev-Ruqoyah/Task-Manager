import { RxDashboard } from "react-icons/rx";
import Navbar from "../component/Navbar";
import DateCard from "../component/card/DateCard";
import Header from "../component/Header";
import TaskCard from "../component/card/TaskCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate("/activity")
    
  }
  return (
    <>
      <div className=" h-[22vh] px-3 py-6 bg-purple-500">
        {/* NavBars */}
        <Navbar text={"14 Sept"} Icon={RxDashboard} />

        {/* MiddleBars */}
        <div className="flex items-center text-white justify-between my-2">
          <div className="flex flex-col">
            <p className="text-xl">Today</p>
            <small>6 Tasks</small>
          </div>
          <button onClick={()=>handleClick()}  className="py-3 px-4 bg-white text-purple-500 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-300">
            Add New
          </button>
        </div>
      </div>
      <div className="bg-white  py-3 px-2 rounded-tl-4xl">
        <DateCard />
        <Header text="My Task" />
        <div className="task h-[60vh] overflow-y-scroll">
          <TaskCard
            taskdesc="Working on a urgent pro"
            tasktime={"6:00 -7:00"}
            tasktype="Coding"
          />
          <TaskCard
            taskdesc="Working on a urgent pro"
            tasktime={"6:00 -7:00"}
            tasktype="Coding"
          />
          <TaskCard
            taskdesc="Working on a urgent pro"
            tasktime={"6:00 -7:00"}
            tasktype="Coding"
          />
          <TaskCard
            taskdesc="Working on a urgent pro"
            tasktime={"6:00 -7:00"}
            tasktype="Coding"
          />
          <TaskCard
            taskdesc="Working on a urgent pro"
            tasktime={"6:00 -7:00"}
            tasktype="Coding"
          />
          <TaskCard
            taskdesc="Working on a urgent pro"
            tasktime={"6:00 -7:00"}
            tasktype="Coding"
          />
          <TaskCard
            taskdesc="Working on a urgent pro"
            tasktime={"6:00 -7:00"}
            tasktype="Coding"
          />
          <TaskCard
            taskdesc="Working on a urgent pro"
            tasktime={"6:00 -7:00"}
            tasktype="Coding"
          />
          <TaskCard
            taskdesc="Working on a urgent pro"
            tasktime={"6:00 -7:00"}
            tasktype="Coding"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
