import Image from "next/image";
import "./OurPublicLives.css";
import public1 from "./public1.svg";
import public2 from "./public2.svg";
import { useTranslations } from "next-intl";

const OurPublicLives = () => {
  const t = useTranslations("Index");
  return (
    <section className="container our-public-lives" id="public">
      <div className="public-text">
        <h1 className="public-title">
          {t("ourPublic")} <span>{t("lives")}</span>
        </h1>
        <p className="features-desc">{t("ourPublicDesc")}</p>
      </div>
      <div className="public-img">
        <Image
          src={public1}
          alt="first feature"
          width={500}
          height={500}
          className="public1"
        />
        <Image
          src={public2}
          alt="first feature"
          width={500}
          height={500}
          className="public2"
        />
      </div>
    </section>
  );
};

export default OurPublicLives;
