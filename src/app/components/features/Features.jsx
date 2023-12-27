import Image from "next/image";
import "./Features.css";
import firstFeaturImg from "./first-feature.svg";
import secondFeaturImg from "./second-feature.svg";
import thirdFeatureImg from "./third-feature.svg";
import classroom from "./classrom.svg";
import { useTranslations } from "next-intl";
import menu from "./menu.svg";
import video from "./video.svg";
import users from "./users.svg";
import FeatureItem from "./FeatureItem";
import teacherRooms from "./teacher-rooms.svg";

const Features = () => {
  const t = useTranslations("Index");
  return (
    <section id="features" className="container features">
      <div className="features-text">
        <h1 className="features-title">
          {t("ourTitle")} <span>{t("ourFeatures")}</span>
        </h1>
        <p className="features-desc">{t("ourFeaturesDesc")}</p>
      </div>
      <div className="first-feature">
        <div className="first-feature-img">
          <Image
            src={classroom}
            alt="first feature"
            width={500}
            height={500}
            className="image"
          />
        </div>
        <div className="fist-feature-text">
          <h1>
            <span>{t("A user interface")}</span>{" "}
            {t("designed for the classroom")}
          </h1>
          <ul className="items">
            <FeatureItem
              text={t(
                "students can easily learn from Registered Courses and get certificates",
              )}
              icon={menu}
            />
            <FeatureItem
              text={t(
                "Teachers can easily open a live and start stying journey",
              )}
              icon={video}
            />
            <FeatureItem
              text={t(
                "Teachers can easily see all students and class data at one time",
              )}
              icon={users}
            />
          </ul>
        </div>
      </div>
      <div className="first-feature">
        <div className="fist-feature-text">
          <h1>
            <span>{t("Tools")}</span> {t("ourFeaturesCard1Title")}
          </h1>
          <p>{t("ourFeaturesCard1Desc")}</p>
        </div>
        <div className="first-feature-img">
          <Image
            src={firstFeaturImg}
            alt="first feature"
            width={500}
            height={500}
            className="image"
          />
        </div>
      </div>
      <div className="first-feature">
        <div className="first-feature-img">
          <Image
            src={secondFeaturImg}
            alt="first feature"
            width={500}
            height={500}
            className="image"
          />
        </div>
        <div className="fist-feature-text">
          <h1>
            <span>{t("quizzes")}</span> {t("ourFeaturesCard2Title")}
          </h1>
          <p>{t("ourFeaturesCard2Desc")}</p>
        </div>
      </div>
      <div className="first-feature">
        <div className="fist-feature-text">
          <h1>
            <span>{t("affiliate")}</span> {t("ourFeaturesCard3Title")}
          </h1>
          <p>{t("ourFeaturesCard3Desc")}</p>
        </div>
        <div className="first-feature-img">
          <Image
            src={thirdFeatureImg}
            alt="first feature"
            width={500}
            height={500}
            className="image"
          />
        </div>
      </div>
      <div className="first-feature">
        <div className="first-feature-img">
          <Image
            src={teacherRooms}
            alt="first feature"
            width={500}
            height={500}
            className="image"
          />
        </div>
        <div className="fist-feature-text">
          <h1>
            <span>{t("rooms")}</span> {t("ourFeaturesCard4Title")}
          </h1>
          <p>{t("ourFeaturesCard04Desc")}</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
