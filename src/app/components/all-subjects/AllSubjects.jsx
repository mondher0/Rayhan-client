import SubjectCard from "../subject-card/SubjectCard";
import "./AllSubjects.css";

const AllSubjects = ({ subjects }) => {
  return (
    <div className="subjects-cards">
      {subjects?.map((subject) => {
        return (
          <SubjectCard key={subject.id} id={subject.id} name={subject.name} />
        );
      })}
    </div>
  );
};

export default AllSubjects;
