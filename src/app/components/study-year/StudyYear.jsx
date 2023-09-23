import "./StudyYear.css";
import { useLocale, useTranslations } from "next-intl";

const StudyYear = () => {
  const t = useTranslations("Auth");
  const locale = useLocale();
  return (
    <div
      className={
        locale === "ar"
          ? "learning-procces learning-procces-ar"
          : "learning-procces"
      }
    >
      <p className="learning-procces-desc">{t("chooseStudyLevel")}</p>
      <div className="years">
        <div className="year hover">{t("firstYear")}</div>
        <div className="year hover">{t("secondYear")}</div>
        <div className="year hover">{t("thirdYear")}</div>
        <div className="year hover">{t("fourthYear")}</div>
        <div className="year hover">{t("fifthYear")}</div>
      </div>
    </div>
  );
};

export default StudyYear;
