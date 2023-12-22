"use client";
import "../what-you-do/WhatYouDo.css";
import Image from "next/image";
import WhatTheySayImg from "./what-they-say.svg";
import { useLocale, useTranslations } from "next-intl";
import "./what-they-say.css";
import { IoStarSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const WhatTheySay = ({ reviews }) => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const [rates, setRates] = useState(reviews);

  // handle next review
  const handleNextReview = () => {
    const newRates = [...rates];
    const firstRate = newRates.shift();
    newRates.push(firstRate);
    setRates(newRates);
  };
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
        <div className="next-btn hover" onClick={handleNextReview}>
          <IoIosArrowForward color="#1EA4CE" />
        </div>
        <div className="ratings">
          <p>{rates[0]?.comment}</p>
          <div className="rate">
            <p className="rate-text">{rates[0]?.full_name}</p>
            <div className="stars">
              {Array(parseInt(rates[0]?.stars))
                .fill(0)
                .map((index) => (
                  <IoStarSharp size={20} color="#FFD700" key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatTheySay;
