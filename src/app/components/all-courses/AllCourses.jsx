import "../all-subjects/AllSubjects.css";
import CourseCard from "../course-card/CourseCard";

const AllCourses = ({style}) => {
  return (
    <div className="subjects-cards">
      <CourseCard style={style}  />
      <CourseCard style={style} />
      <CourseCard style={style} />
      <CourseCard style={style} />
      <CourseCard style={style} />
      <CourseCard style={style} />
    </div>
  );
};

export default AllCourses;
