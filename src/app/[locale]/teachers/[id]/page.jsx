import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./teacher-details.css";
import PopularTeacherCard from "@/app/components/popular-teacher-card/PopularTeacherCard";
import TeacherCourses from "@/app/components/teacher-courses/TeacherCourses";
import TeacherReviews from "@/app/components/teacher-reviews/TeacherReviews";
import PostReview from "@/app/components/post-review/PostReview";

const TeacherDetailsPage = ({ params, searchParams }) => {
  const { id } = params;
  const { page } = searchParams;
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
            width="1114"
            height="683"
            src="https://www.youtube.com/embed/7rtgVNrtE3o?si=DzXk9qmxCTD1qCLf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
        <p className="title">Teacher Courses</p>
        <TeacherCourses id={id} currentPage={page} />
        <p className="title">Teacher Reviews</p>
        <TeacherReviews />
        <PostReview />
      </main>
    </>
  );
};

export default TeacherDetailsPage;
