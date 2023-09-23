import { useState } from "react";
import LearningType from "../learning-type/LearningType";
import elementrySchool from "./elementary-school.svg";
import highSchool from "./high-school.svg";
import university from "./university.svg";
import school from "./school.svg";

const LevelStudy = ({ setRegisterProccesState }) => {
  const [style1, setStyle1] = useState();
  const [style2, setStyle2] = useState();
  const [style3, setStyle3] = useState();
  const [style4, setStyle4] = useState();
  return (
    <div className="learning-procces">
      <p className="learning-procces-desc">
        Choose the learning process you want
      </p>
      <div className="learning-process-types">
        <LearningType
          icon={elementrySchool}
          style={style1}
          setStyle={setStyle1}
          text="Elementary School"
          action={setRegisterProccesState}
          actionType="study-year"
        />
        <LearningType
          icon={school}
          style={style2}
          setStyle={setStyle2}
          text="Middle School"
          action={setRegisterProccesState}
          actionType="study-year"
        />
        <LearningType
          icon={highSchool}
          style={style3}
          setStyle={setStyle3}
          text="High School"
          action={setRegisterProccesState}
          actionType="study-year"
        />
        <LearningType
          icon={university}
          style={style4}
          setStyle={setStyle4}
          text="University"
          action={setRegisterProccesState}
          actionType="study-year"
        />
      </div>
    </div>
  );
};

export default LevelStudy;
