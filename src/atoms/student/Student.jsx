import student from "./student.png";
import "./Student.css";
import Image from "next/image";
const Student = () => {
  return <Image src={student} alt="student" className="student" />;
};

export default Student;
