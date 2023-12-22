import "../what-you-do/WhatYouDo.css";
import Image from "next/image";
import WhatTheySayImg from "./what-they-say.svg";
import { useLocale, useTranslations } from "next-intl";
import "./what-they-say.css";
import { IoStarSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const WhatTheySay = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <section className="container what-you-do add">
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
          <span>TESTIMONIAL</span>
        </div>
        <h1 className="what-you-do-title">
          {t("whatThey")} <span>{t("say")}</span>
          {locale === "ar" ? "؟" : "?"}
        </h1>
        <p className="what-you-do-desc">{t("whatTheySayDesc1")}</p>
        <p className="what-you-do-desc">{t("whatTheySayDesc2")}</p>
      </div>
      <div className="what-you-do-img">
        <Image
          src={WhatTheySayImg}
          alt="what you do"
          width={400}
          height={400}
          className="what"
        />
        <div className="next-btn hover">
          <IoIosArrowForward color="#1EA4CE" />
        </div>
        <div className="ratings">
          <p>
            "Thank you so much for your help. It's exactly what I've been
            looking for. You won't regret it. It really saves me time and
            effort. Rayhane is exactly what learning algeria has been lacking."
          </p>
          <div className="rate">
            <p className="rate-text">Mondher Mameri</p>
            <div className="stars">
              <IoStarSharp color="#FBA333" />
              <IoStarSharp color="#FBA333" />
              <IoStarSharp color="#FBA333" />
              <IoStarSharp color="#FBA333" />
              <IoStarSharp color="#FBA333" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatTheySay;
