import "../all-subjects/AllSubjects.css";
import CourseCard from "../course-card/CourseCard";

const AllCourses = ({ style, courses }) => {
  return (
    <div className="subjects-cards">
      {courses?.map((course) => (
        <CourseCard key={course.id} style={style} course={course} />
      ))}
    </div>
  );
};

export default AllCourses;
