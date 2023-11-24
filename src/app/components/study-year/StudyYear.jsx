import useAuthContext from "@/hooks/useAuthContext";
import "./StudyYear.css";
import { useLocale, useTranslations } from "next-intl";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudyYear = () => {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const { schoolType, handleRegister, isLoading } = useAuthContext();
  const loadingStyle = {
    opacity: isLoading ? "0.2" : "unset",
  };

  return (
    <div
      className={
        locale === "ar"
          ? "learning-procces learning-procces-ar"
          : "learning-procces"
      }
    >
      <ToastContainer />
      <p className="learning-procces-desc">{t("chooseStudyLevel")}</p>
      <div className="years">
        <div
          className="year hover"
          onClick={() => {
            handleRegister(schoolType + " " + "(1st year)");
          }}
          style={loadingStyle}
        >
          {t("firstYear")}
        </div>
        <div
          className="year hover"
          onClick={() => {
            handleRegister(schoolType + " " + "(2nd year)");
          }}
          style={loadingStyle}
        >
          {t("secondYear")}
        </div>
        <div
          className="year hover"
          onClick={() => {
            handleRegister(schoolType + " " + "(3rd year)");
          }}
          style={loadingStyle}
        >
          {t("thirdYear")}
        </div>
        {schoolType === "Elementary school" ||
        schoolType === "Middle  school" ? (
          <div
            className="year hover"
            onClick={() => {
              handleRegister(schoolType + " " + "(4th year)");
            }}
            style={loadingStyle}
          >
            {t("fourthYear")}
          </div>
        ) : null}
        {schoolType === "Elementary school" ? (
          <div
            className="year hover"
            onClick={() => {
              handleRegister(schoolType + " " + "(5th year)");
            }}
            style={loadingStyle}
          >
            {t("fifthYear")}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StudyYear;
