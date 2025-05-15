import { FiClock } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import Navbar from "../component/Navbar";
import DateCard from "../component/card/DateCard";

const Home = () => {
  return (
    <>
      <div className=" h-screen">
        <div className="container md:max-w-xl bg-purple-500 text-white w-full mx-auto">
          <div className=" h-[30%] px-3 py-6">

          {/* NavBars */}
            <Navbar text={"14 Sept"} Icon={RxDashboard}/>

            {/* MiddleBars */}
            <div className="flex items-center justify-between my-2">
              <div className="flex flex-col">
                <p className="text-xl">Today</p>
                <small>6 Tasks</small>
              </div>
              <button className="py-3 px-4 bg-white text-purple-500 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-300">Add New</button>
            </div>

          </div>
          <div className="bg-white py-3 rounded-tl-4xl">
              <DateCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
