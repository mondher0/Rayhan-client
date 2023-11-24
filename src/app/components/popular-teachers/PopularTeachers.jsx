"use client";
import { useTranslations } from "next-intl";
import PopularTeacherCard from "../popular-teacher-card/PopularTeacherCard";
import "./PopularTeachers.css";
import { useRouter } from "next/navigation";

const PopularTeachers = ({ teachers }) => {
  const t = useTranslations("afterLogin");
  const router = useRouter();
  return (
    <>
      <div className="popular-teachers">
        {teachers.slice(0, 3).map((teacher, index) => (
          <PopularTeacherCard teacher={teacher} key={index} />
        ))}
      </div>
      <div className="popular">
        <p
          className="see-more hover"
          onClick={() => router.push("/teachers?page=1")}
        >
          {t("seeMore")}
        </p>
      </div>
    </>
  );
};

export default PopularTeachers;
