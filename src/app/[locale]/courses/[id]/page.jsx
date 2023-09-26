import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./course-details.css";
import CourseVideos from "@/app/components/course-videos/CourseVideos";

const CourseDetailsPage = () => {
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main className="course-details">
        <p className="title">Courses/Course details</p>
        <CourseVideos />
      </main>
    </>
  );
};

export default CourseDetailsPage;
