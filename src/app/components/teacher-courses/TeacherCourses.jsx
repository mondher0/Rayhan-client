import "./TeacherCourses.css";
import CourseCard from "../course-card/CourseCard";
import Pagination from "../pagination/Pagination";

const TeacherCourses = ({ id, currentPage, totalPage, courses }) => {
  return (
    <>
      <section className="teacher-courses">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
      <div className="pagination-bar">
        <Pagination
          currentPage={currentPage}
          url={`/teachers/${id}`}
          totalPage={totalPage}
        />
      </div>
    </>
  );
};

export default TeacherCourses;
