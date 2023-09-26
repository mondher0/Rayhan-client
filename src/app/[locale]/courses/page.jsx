import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./courses.css";
import SearchInput from "@/app/components/search-input/SearchInput";
import AllCourses from "@/app/components/all-courses/AllCourses";
import Pagination from "@/app/components/pagination/Pagination";

const CoursesPage = ({ searchParams }) => {
  const { page } = searchParams;
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className="courses">
          <p>Courses</p>
          <SearchInput />
          <AllCourses />
        </section>
        <section className="pagination-bar">
          <Pagination currentPage={page} url="/courses" />
        </section>
      </main>
    </>
  );
};

export default CoursesPage;
