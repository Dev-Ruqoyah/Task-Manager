import type { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

interface Props {
    text:string
    Icon: IconType
}
const Navbar:React.FC<Props> = ({text,Icon}) => {
  return (
    <div className="flex items-center justify-between pb-4">
      <Icon className="text-lg"/>
      <p className="text-xl ">{text}</p>
      <FiClock className="text-lg" />
      
    </div>
  );
};

export default Navbar;
