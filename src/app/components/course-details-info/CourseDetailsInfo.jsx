import { useTranslations } from "next-intl";
import "./courseDetailsInfo.css";

const CourseDetailsInfo = () => {
  const t = useTranslations("afterLogin");
  return (
    <div className="course-details-info">
      <h3 className="info-title">{t("courseDetails")}</h3>
      <p className="info-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis consectetur adipiscing elit. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur
        adipiscing elit.
      </p>
      <h3 className="info-title">{t("certification")}</h3>
      <p className="info-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis consectetur adipiscing elit.
      </p>
      <h3 className="info-title">{t("forWho")}</h3>
      <p className="info-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default CourseDetailsInfo;
