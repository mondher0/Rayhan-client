import Image from "next/image";
import "./WatchCourse.css";
import start from "./start.svg";

const WatchCourse = () => {
  return (
    <div className="course">
      <Image
        src="/images/flutter.png"
        alt="Flutter"
        width={100}
        height={150}
        className="course-img"
      />
      <div className="course-info">
        <h3 className="course-title">Introduction to flutter</h3>
        <p className="teacher-name">Mondher Mameri</p>
        <p className="course-content">lecture 5 | How to create a class</p>
        <div className="course-progress-container">
          <progress className="course-progress" value="50" max="100"></progress>
          50%
        </div>
        <button className="course-btn hover">
          Continue
          <Image
            src={start}
            alt="start"
            width={20}
            height={20}
            className="start"
          />
        </button>
      </div>
    </div>
  );
};

export default WatchCourse;
