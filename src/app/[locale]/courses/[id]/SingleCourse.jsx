"use client";
import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./course-details.css";
import CourseVideos from "@/app/components/course-videos/CourseVideos";
import CourseDetailsInfo from "@/app/components/course-details-info/CourseDetailsInfo";
import CoursePrice from "@/app/components/course-price/CoursePrice";
import TeacherReviews from "@/app/components/teacher-reviews/TeacherReviews";
import PostReview from "@/app/components/post-review/PostReview";
import AllCourses from "@/app/components/all-courses/AllCourses";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

const SingleCourse = ({ course, reviews, courseId }) => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  const [independent, setIndependent] = useState(false);
  console.log(independent);

  const {
    title,
    description,
    destination,
    price,
    teacher,
    total_rate,
    comments_count,
  } = course || {};
  const { user } = teacher || {};
  const lessons = course?.lessons?.length;
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main
        className={
          locale === "ar"
            ? "course-details course-details-ar"
            : "course-details"
        }
      >
        <p className="title">{t("courseDetailsTitle")}</p>
        <CourseVideos
          title={title}
          course={course}
          independent={independent}
          courseId={courseId}
        />
        <section className="informations">
          <CourseDetailsInfo
            description={description}
            destination={destination}
          />
          <CoursePrice
            price={price}
            user={user}
            comments={comments_count}
            ratings={total_rate}
            lessons={lessons}
            setIndependent={() => setIndependent(true)}
            courseId={courseId}
          />
        </section>
        <p className="content-title">{t("courseReviews")}</p>
      </main>
      <div className="rev">
        <TeacherReviews reviews={reviews} />
      </div>
      <div className="rev">
        <PostReview />
      </div>
      <div className={locale === "ar" ? "rev rev-ar" : "rev"}>
        <p className="content-title">{t("similarCourses")}</p>
      </div>
      <div className="rev">
        <AllCourses />
      </div>
    </>
  );
};

export default SingleCourse;
