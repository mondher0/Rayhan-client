import WatchCourse from "../watch-course/WatchCourse";
import "./WatchedCourses.css";

const WatchedCourses = () => {
  return (
    <div className="courses">
      <WatchCourse />
      <WatchCourse />
      <WatchCourse />
      <p className="see-more">See more</p>
    </div>
  );
};

export default WatchedCourses;
