import "./TeacherCourses.css";
import CourseCard from "../course-card/CourseCard";
import Pagination from "../pagination/Pagination";

const TeacherCourses = ({ id, currentPage }) => {
  return (
    <>
      <section className="teacher-courses">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
      <div className="pagination-bar">
        <Pagination currentPage={currentPage} url={`/teachers/${id}`} />
      </div>
    </>
  );
};

export default TeacherCourses;
