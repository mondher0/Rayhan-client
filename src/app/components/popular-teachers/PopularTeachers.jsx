import PopularTeacherCard from "../popular-teacher-card/PopularTeacherCard";
import "./PopularTeachers.css";

const PopularTeachers = () => {
  return (
    <>
      <div className="popular-teachers">
        <PopularTeacherCard />
        <PopularTeacherCard />
        <PopularTeacherCard />
        <PopularTeacherCard />
      </div>
      <div className="popular">
        <p className="see-more hover">See more</p>
      </div>
    </>
  );
};

export default PopularTeachers;
