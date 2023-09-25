import AllTeachers from "@/app/components/all-teachers/AllTeachers";
import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "../subjects/subjects.css";
import Pagination from "@/app/components/pagination/Pagination";

const page = () => {
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className="subjects">
          <p>Teachers</p>
          <AllTeachers />
        </section>
        <section className="pagination-bar">
          <Pagination currentPage={page} url="/subjects" />
        </section>
      </main>
    </>
  );
};

export default page;
