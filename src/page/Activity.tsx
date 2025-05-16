import { RxDashboard } from "react-icons/rx";
import Navbar from "../component/Navbar";
import DateCard from "../component/card/DateCard";
import Header from "../component/Header";

const Activity = () => {
  return (
    <>
    <div className="bg-white/8 text-black px-3 py-6">
      <div className="header ">
        <Navbar text="Create Task" Icon={RxDashboard} />
        <DateCard/>
      </div>
        <div className="category">
            <Header text="Choose Category"/>
            <div className="h-[70vh] overflow-y-scroll">

            </div>
        </div>
    </div>
    </>
  );
};

export default Activity;
