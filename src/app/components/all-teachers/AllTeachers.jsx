import PopularTeacherCard from "../popular-teacher-card/PopularTeacherCard";
import "../all-subjects/AllSubjects.css";

const AllTeachers = ({ teachers }) => {
  console.log("mondher", teachers);
  if (teachers?.length === 0) {
    return (
      <div className="no-subjects">
        <p>There is no teachers yet</p>
      </div>
    );
  }
  return (
    <div className="subjects-cards">
      {teachers?.map((teacher) => (
        <PopularTeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
  );
};

export default AllTeachers;
