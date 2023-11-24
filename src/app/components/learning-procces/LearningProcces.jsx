"use client";
import "./LearningProcces.css";
import takwinIcon from "./takwin.svg";
import coursesIcon from "./courses.svg";
import { useState } from "react";
import LearningType from "../learning-type/LearningType";
import { useLocale, useTranslations } from "next-intl";

const LearningProcces = ({ setRegisterProccesState }) => {
  const [style1, setStyle1] = useState();
  const [style2, setStyle2] = useState();
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
      <p className="learning-procces-desc">{t("learningProcess")}</p>
      <div className="learning-process-types">
        <LearningType
          icon={takwinIcon}
          style={style1}
          setStyle={setStyle1}
          text={t("takwin")}
          action={setRegisterProccesState}
          actionType="level-study"
          takwin={true}
        />
        <LearningType
          icon={coursesIcon}
          style={style2}
          setStyle={setStyle2}
          text={t("courses")}
          action={setRegisterProccesState}
          actionType="level-study"
        />
      </div>
    </div>
  );
};

export default LearningProcces;
