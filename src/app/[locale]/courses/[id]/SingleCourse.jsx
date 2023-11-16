import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./course-details.css";
import CourseVideos from "@/app/components/course-videos/CourseVideos";
import CourseDetailsInfo from "@/app/components/course-details-info/CourseDetailsInfo";
import CoursePrice from "@/app/components/course-price/CoursePrice";
import TeacherReviews from "@/app/components/teacher-reviews/TeacherReviews";
import PostReview from "@/app/components/post-review/PostReview";
import AllCourses from "@/app/components/all-courses/AllCourses";
import { useLocale, useTranslations } from "next-intl";

const SingleCourse = ({ course, reviews }) => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();

  const { title, description, destination, price, teacher } = course || {};
  const { user } = teacher || {};
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
        <CourseVideos title={title} />
        <section className="informations">
          <CourseDetailsInfo
            description={description}
            destination={destination}
          />
          <CoursePrice price={price} user={user} />
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
