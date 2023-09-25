import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./teacher-details.css";
import PopularTeacherCard from "@/app/components/popular-teacher-card/PopularTeacherCard";

const TeacherDetailsPage = () => {
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main className="teacher-details">
        <p className="title">Teachers/Teacher details</p>
        <section className="video">
          <PopularTeacherCard />
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/7rtgVNrtE3o?si=DzXk9qmxCTD1qCLf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
      </main>
    </>
  );
};

export default TeacherDetailsPage;
