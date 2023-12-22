import Student from "@/atoms/student/Student";
import "./Introduction.css";
import PlayStore from "@/atoms/playstore/PlayStore";
import AppStore from "@/atoms/appstore/AppStore";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import hero1 from "./hero1.svg";
import hero2 from "./hero2.svg";
import hero3 from "./hero3.svg";
import hero4 from "./hero4.svg";
import hero5 from "./hero5.svg";

const Introduction = () => {
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <section className="container intro">
      <div
        className={
          locale === "ar"
            ? "intro-container intro-container-reversed"
            : "intro-container"
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
        <Image
          src={hero1}
          alt="intro-bg"
          className={locale === "ar" ? "intro-bg1-reversed" : "intro-bg1"}
          width={300}
          height={105}
        />
        <Image
          src={hero2}
          alt="intro-bg"
          className={locale === "ar" ? "intro-bg2-reversed" : "intro-bg2"}
          width={300}
          height={105}
        />
        <Image
          src={hero3}
          alt="intro-bg"
          className={locale === "ar" ? "intro-bg3-reversed" : "intro-bg3"}
          width={300}
          height={105}
        />
        <Image
          src={hero4}
          alt="intro-bg"
          className={locale === "ar" ? "intro-bg4-reversed" : "intro-bg4"}
          width={300}
          height={105}
        />
        <Image
          src={hero5}
          alt="intro-bg"
          className={locale === "ar" ? "intro-bg5-reversed" : "intro-bg5"}
          width={300}
          height={105}
        />

        <Student />
      </div>
    </section>
  );
};

export default Introduction;
