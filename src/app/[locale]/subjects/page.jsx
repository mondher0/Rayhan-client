import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./subjects.css";
import AllSubjects from "@/app/components/all-subjects/AllSubjects";

const SubjectsPage = () => {
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
      </main>
    </>
  );
};

export default SubjectsPage;
