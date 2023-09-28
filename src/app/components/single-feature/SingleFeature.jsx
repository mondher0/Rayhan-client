import "./SingleFeature.css";
import { IoIosArrowForward } from "react-icons/io";

const SingleFeature = ({ text, handleClick, feature }) => {
  const style = {
    border: "1px solid , #C5D5FF",
    background: "#E9EFFF",
  };
  return (
    <div
      className="single-feature"
      onClick={() => {
        handleClick(feature);
      }}
    >
      <p>{text}</p>
      <IoIosArrowForward />
    </div>
  );
};

export default SingleFeature;
