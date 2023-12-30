"use client";
import { useTranslations } from "next-intl";
import WatchCourse from "../watch-course/WatchCourse";
import "./WatchedCourses.css";
import { useRouter } from "next/navigation";

const WatchedCourses = ({ continueCourses }) => {
  const t = useTranslations("afterLogin");
  console.log(continueCourses);
  const router = useRouter();
  if (continueCourses.length === 0) {
    return null;
  }
  return (
    <div className="courses">
      {continueCourses?.slice(0, 3).map((course) => (
        <WatchCourse key={course._id} course={course} />
      ))}
      <p
        className="see-more hover"
        onClick={() => (window.location.href = "/courses?page=1")}
      >
        {t("seeMore")}
      </p>
    </div>
  );
};

export default WatchedCourses;
