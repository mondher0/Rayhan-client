import Student from "@/atoms/student/Student";
import "./Introduction.css";
import PlayStore from "@/atoms/playstore/PlayStore";
import AppStore from "@/atoms/appstore/AppStore";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const Introduction = () => {
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <section className="container intro">
      <div
        className={
          locale === "ar" ? "intro-container intro-container-reversed" : "intro-container"
        }
      >
        <div className="text">
          <h1 className="title">
            <span
              className={locale === "ar" ? "studying-reversed" : "studying"}
            >
              {t("studying")}
            </span>
            {t("introTitle")}
          </h1>
          <p className="desc">{t("introDesc")}</p>
          <div className="intro-btns">
            <a className="intro-btn" href="#">
              <PlayStore />
            </a>
            <a className="intro-btn" href="#">
              <AppStore />
            </a>
          </div>
        </div>
      </div>
      <div className="intro-img">
        <Student />
      </div>
    </section>
  );
};

export default Introduction;
