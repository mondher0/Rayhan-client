import { useTranslations } from "next-intl";
import "./CourseDetailsInfo.css";

const CourseDetailsInfo = ({ description, destination }) => {
  const t = useTranslations("afterLogin");
  return (
    <div className="course-details-info">
      <h3 className="info-title">{t("courseDetails")}</h3>
      <p className="info-desc">{description}</p>
      <h3 className="info-title">{t("certification")}</h3>
      <p className="info-desc">missing from bakcend</p>
      <h3 className="info-title">{t("forWho")}</h3>
      <p className="info-desc">{destination}</p>
    </div>
  );
};

export default CourseDetailsInfo;
