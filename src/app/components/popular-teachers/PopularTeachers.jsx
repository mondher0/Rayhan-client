import { useTranslations } from "next-intl";
import PopularTeacherCard from "../popular-teacher-card/PopularTeacherCard";
import "./PopularTeachers.css";

const PopularTeachers = () => {
  const t = useTranslations("afterLogin");
  return (
    <>
      <div className="popular-teachers">
        <PopularTeacherCard />
        <PopularTeacherCard />
        <PopularTeacherCard />
        <PopularTeacherCard />
      </div>
      <div className="popular">
        <p className="see-more hover">{t("seeMore")}</p>
      </div>
    </>
  );
};

export default PopularTeachers;
