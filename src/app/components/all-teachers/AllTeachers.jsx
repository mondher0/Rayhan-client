import PopularTeacherCard from "../popular-teacher-card/PopularTeacherCard";
import "../all-subjects/AllSubjects.css";

const AllTeachers = () => {
  return (
    <div className="subjects-cards">
      <PopularTeacherCard />
      <PopularTeacherCard />
      <PopularTeacherCard />
      <PopularTeacherCard />
      <PopularTeacherCard />
      <PopularTeacherCard />
    </div>
  );
};

export default AllTeachers;
