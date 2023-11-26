import student from "./student.png";
import "./Student.css";
import Image from "next/image";
import { useLocale } from "next-intl";
const Student = () => {
  const locale = useLocale();
  return (
    <Image
      src={student}
      alt="student"
      className={locale === "ar" ? "student-reversed" : "student"}
    />
  );
};

export default Student;
