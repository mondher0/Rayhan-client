import { useState } from "react";
import LearningType from "../learning-type/LearningType";
import elementrySchool from "./elementary-school.svg";
import highSchool from "./high-school.svg";
import university from "./university.svg";
import school from "./school.svg";
import { useLocale, useTranslations } from "next-intl";

const LevelStudy = ({ setRegisterProccesState }) => {
  const [style1, setStyle1] = useState();
  const [style2, setStyle2] = useState();
  const [style3, setStyle3] = useState();
  const [style4, setStyle4] = useState();
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
      <p className="learning-procces-desc">{t("studyLevel")}</p>
      <div className="learning-process-types">
        <LearningType
          icon={elementrySchool}
          style={style1}
          setStyle={setStyle1}
          text={t("elementarySchool")}
          action={setRegisterProccesState}
          actionType="study-year"
          type="Elementary school"
        />
        <LearningType
          icon={school}
          style={style2}
          setStyle={setStyle2}
          text={t("middleSchool")}
          action={setRegisterProccesState}
          actionType="study-year"
          type="Middle  school"
        />
        <LearningType
          icon={highSchool}
          style={style3}
          setStyle={setStyle3}
          text={t("highSchool")}
          action={setRegisterProccesState}
          actionType="study-year"
          type="High  school"
        />
        <LearningType
          icon={university}
          style={style4}
          setStyle={setStyle4}
          text={t("university")}
          action={setRegisterProccesState}
          actionType="study-year"
          type="University"
        />
      </div>
    </div>
  );
};

export default LevelStudy;
