import Image from "next/image";
import "./WhatYouDo.css";
import whatYouDoImg from "./what-you-do-img.svg";
import { useTranslations } from "next-intl";

const WhatYouDo = () => {
  const t = useTranslations("Index");
  return (
    <section className="container what-you-do">
      <div className="what-you-do-text">
        <div className="welcome">
          <svg
            width="81"
            height="1"
            viewBox="0 0 81 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.111328"
              y1="0.5"
              x2="80.1113"
              y2="0.5"
              stroke="#525596"
            />
          </svg>
          <span>WELCOME</span>
        </div>
        <h1 className="what-you-do-title">
          {t("whatyouDoTitle")} <span>{t("whatyouDoRayhan")}</span>
        </h1>
        <p className="what-you-do-desc">{t("whatYouDoDesc")}</p>
        <a href="#public">{t("learnMore")}</a>
      </div>
      <div className="what-you-do-img">
        <Image src={whatYouDoImg} alt="what you do" width={500} height={500} />
      </div>
    </section>
  );
};

export default WhatYouDo;
