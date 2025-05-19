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
  const categories = [
    {
      Icon: HiOutlineLightBulb,
      categoryType: "Idea",
      noOfTask : "12 Tasks"
    },
    {
      Icon: CiMusicNote1,
      categoryType: "Music",
      noOfTask: "12 Tasks"
    },
    {
      Icon: IoFastFoodOutline,
      categoryType: "Food",
      noOfTask:"12 Tasks"
    },
    {
      Icon: LuNotebookTabs,
      categoryType: "Work",
      noOfTask :"12 Tasks"
    },
    {
      Icon: CiDumbbell,
      categoryType: "Sport",
      noOfTask: "12 Tasks"
    },
  ];

  
  return (
    <>
      <div className="bg-white/8 text-black px-3 py-6">
        <div className="header ">
          <Navbar text="Create Task" Icon={RxDashboard} />
          <DateCard />
        </div>
        <div className="category">
          <Header text="Choose Category" />
          <div className="h-[70vh] overflow-y-scroll">
            {categories.map((category,index)=>(
              <CategoryCard  key={index} Icon={category.Icon} categoryType={category.categoryType} noOfTask={category.noOfTask} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
