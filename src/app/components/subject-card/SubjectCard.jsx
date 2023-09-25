import "./SubjectCard.css";
import Image from "next/image";

const SubjectCard = () => {
  return (
    <div className="subject-card">
      <Image
        src="/images/subject-bg.png"
        alt="math"
        width={550}
        height={360}
        className="img"
      />
      <div className="subject">
        <span>Maths</span>
      </div>
    </div>
  );
};

export default SubjectCard;
