import { useTranslations } from "next-intl";
import WatchCourse from "../watch-course/WatchCourse";
import "./WatchedCourses.css";

const WatchedCourses = () => {
  const t = useTranslations("afterLogin");
  return (
    <div className="courses">
      <WatchCourse />
      <WatchCourse />
      <WatchCourse />
      <p className="see-more hover">{t("seeMore")}</p>
    </div>
  );
};

export default WatchedCourses;
