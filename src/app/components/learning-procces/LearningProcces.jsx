"use client";
import "./LearningProcces.css";
import takwinIcon from "./takwin.svg";
import coursesIcon from "./courses.svg";
import { useState } from "react";
import LearningType from "../learning-type/LearningType";

const LearningProcces = ({ setRegisterProccesState }) => {
  const [style1, setStyle1] = useState();
  const [style2, setStyle2] = useState();
  return (
    <div className="learning-procces">
      <p className="learning-procces-desc">
        Choose the learning process you want
      </p>
      <div className="learning-process-types">
        <LearningType
          icon={takwinIcon}
          style={style1}
          setStyle={setStyle1}
          text="Takwin"
          action={setRegisterProccesState}
          actionType="level-study"
        />
        <LearningType
          icon={coursesIcon}
          style={style2}
          setStyle={setStyle2}
          text="Courses"
          action={setRegisterProccesState}
          actionType="level-study"
        />
      </div>
    </div>
  );
};

export default LearningProcces;
