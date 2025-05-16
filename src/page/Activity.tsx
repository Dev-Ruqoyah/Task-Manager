import { RxDashboard } from "react-icons/rx";
import Navbar from "../component/Navbar";
import DateCard from "../component/card/DateCard";
import Header from "../component/Header";
import CategoryCard from "../component/card/CategoryCard";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiDumbbell, CiMusicNote1 } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuNotebookTabs } from "react-icons/lu";

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
            <CategoryCard Icon={HiOutlineLightBulb} categoryType="Idea" noOfTask="12 Tasks"/>
            <CategoryCard Icon={CiMusicNote1} categoryType="Music" noOfTask="12 Tasks"/>
            <CategoryCard Icon={IoFastFoodOutline} categoryType="Food" noOfTask="12 Tasks"/>
            <CategoryCard Icon={LuNotebookTabs} categoryType="Work" noOfTask="12 Tasks"/>
            <CategoryCard Icon={CiDumbbell} categoryType="Sport" noOfTask="12 Tasks"/>
            <CategoryCard Icon={CiDumbbell} categoryType="Sport" noOfTask="12 Tasks"/>
            </div>
        </div>
    </div>
    </>
  );
};

export default Activity;
