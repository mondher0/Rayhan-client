import useAuthContext from "@/hooks/useAuthContext";
import "../learning-procces/LearningProcces.css";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LearningType = ({
  icon,
  style,
  setStyle,
  text,
  action,
  actionType,
  takwin,
  type,
}) => {
  const { user, handleRegister, isLoading, setSchoolType } = useAuthContext();

  return (
    <div
      className={`learning-procces-type hover ${style}`}
      style={{
        opacity: isLoading ? "0.2" : "unset",
      }}
      onClick={() => {
        if (takwin) {
          console.log("takwin");
          console.log(user);
          handleRegister("Takwin");
          return;
        }
        if (type) {
          setSchoolType(type);
        }
        if (type === "University") {
          handleRegister("University");
          return;
        }
        setStyle("selected");
        action(actionType);
      }}
    >
      <ToastContainer />
      <Image src={icon} alt="Takwin" width={100} height={100} />
      <p>{text}</p>
    </div>
  );
};

export default LearningType;
