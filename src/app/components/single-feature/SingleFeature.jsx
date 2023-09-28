import "./SingleFeature.css";
import { IoIosArrowForward } from "react-icons/io";

const SingleFeature = ({ text, isSelected }) => {
  return (
    <div className="single-feature">
      <p>{text}</p>
      <IoIosArrowForward />
    </div>
  );
};

export default SingleFeature;
