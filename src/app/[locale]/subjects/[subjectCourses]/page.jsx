import AllCourses from "@/app/components/all-courses/AllCourses";
import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "../subjects.css";
import Pagination from "@/app/components/pagination/Pagination";

const SubjectCoursespage = ({ searchParams, params }) => {
  const { page } = searchParams;
  const { subjectCourses } = params;
  console.log("------------------ SubjectCoursespage ------------------");
  console.log(subjectCourses);
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className="subjects">
          <p>Subjects/{subjectCourses}</p>
          <AllCourses />
        </section>
        <section className="pagination-bar">
          <Pagination currentPage={page} url={`/subjects/${subjectCourses}`} />
        </section>
      </main>
    </>
  );
};

export default SubjectCoursespage;
