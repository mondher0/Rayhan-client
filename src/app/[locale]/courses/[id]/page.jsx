import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./course-details.css";
import CourseVideos from "@/app/components/course-videos/CourseVideos";
import CourseDetailsInfo from "@/app/components/course-details-info/CourseDetailsInfo";
import CoursePrice from "@/app/components/course-price/CoursePrice";
import TeacherReviews from "@/app/components/teacher-reviews/TeacherReviews";
import PostReview from "@/app/components/post-review/PostReview";
import AllCourses from "@/app/components/all-courses/AllCourses";

const CourseDetailsPage = () => {
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main className="course-details">
        <p className="title">Courses/Course details</p>
        <CourseVideos />
        <section className="informations">
          <CourseDetailsInfo />
          <CoursePrice />
        </section>
        <p className="content-title">Course Reviews</p>
      </main>
      <div className="rev">
        <TeacherReviews />
      </div>
      <div className="rev">
        <PostReview />
      </div>
      <div className="rev">
        <p className="content-title">Similar Course</p>
      </div>
      <div className="rev">
        <AllCourses />
      </div>
    </>
  );
};

export default CourseDetailsPage;
