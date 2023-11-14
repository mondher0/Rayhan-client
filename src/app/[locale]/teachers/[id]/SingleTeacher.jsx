import PopularTeacherCard from "@/app/components/popular-teacher-card/PopularTeacherCard";
import TeacherCourses from "@/app/components/teacher-courses/TeacherCourses";
import TeacherReviews from "@/app/components/teacher-reviews/TeacherReviews";
import PostReview from "@/app/components/post-review/PostReview";
import { useLocale, useTranslations } from "next-intl";
import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./teacher-details.css";

const SingleTeacher = () => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main
        className={locale === "ar" ? "teacher-details rtl" : "teacher-details"}
      >
        <p className="title">{t("teacherDetailsTitle")}</p>
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
        <p className="title">{t("teacherCourses")}</p>
        <TeacherCourses id={id} currentPage={page} />
        <p className="title">{t("teacherReviews")}</p>
        <TeacherReviews />
        <PostReview />
      </main>
    </>
  );
};

export default SingleTeacher;
