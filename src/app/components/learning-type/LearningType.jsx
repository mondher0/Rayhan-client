import "../learning-procces/LearningProcces.css";
import Image from "next/image";

const LearningType = ({ icon, style, setStyle, text, action, actionType }) => {
  return (
    <div
      className={`learning-procces-type hover ${style}`}
      onClick={() => {
        setStyle("selected");
        action(actionType);
      }}
    >
      <Image src={icon} alt="Takwin" width={100} height={100} />
      <p>{text}</p>
    </div>
  );
};

export default LearningType;
