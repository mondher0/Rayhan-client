import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./subjects.css";
import AllSubjects from "@/app/components/all-subjects/AllSubjects";
import Pagination from "@/app/components/pagination/Pagination";

const SubjectsPage = ({ searchParams }) => {
  const { page } = searchParams;
  console.log("------------------ SubjectsPage ------------------");
  console.log(page);
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className="subjects">
          <p>Subjects</p>
          <AllSubjects />
        </section>
        <section className="pagination-bar">
          <Pagination currentPage={page} url="/subjects" />
        </section>
      </main>
    </>
  );
};

export default SubjectsPage;