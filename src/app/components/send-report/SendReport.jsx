import { useTranslations } from "next-intl";
import "./SendReport.css";

const SendReport = () => {
  const t = useTranslations("afterLogin");

  return (
    <div className="send-report">
      <h1>{t("sendReportTitle")}</h1>
      <form>
        <textarea
          name="report"
          id="report"
          cols="100"
          rows="20"
          placeholder="Write your report here"
        ></textarea>
        <button type="submit" className="hover">
          {t("sendBtn")}
        </button>
      </form>
    </div>
  );
};

export default SendReport;
