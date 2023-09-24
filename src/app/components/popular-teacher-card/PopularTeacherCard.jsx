import Image from "next/image";
import "./PopularTeacherCard.css";
import { AiFillStar } from "react-icons/ai";
const PopularTeacherCard = () => {
  return (
    <div className="popular-teacher-card hover">
      <div className="teacher-img-container">
        <Image
          src="/images/teacher.png"
          alt="teacher"
          width={200}
          height={200}
          className="teacher-img"
        />
      </div>
      <div className="teacher-info">
        <h1 className="teacher-name">zahra balaban</h1>
        <p className="teacher-job">Designer</p>
        <p className="teacher-courses">20 courses</p>
        <div className="teacher-rating">
          <div className="ratings">
            4.0
            <AiFillStar size={20} color="#FFD700" />
            <AiFillStar size={20} color="#FFD700" />
            <AiFillStar size={20} color="#FFD700" />
          </div>
          (551)
        </div>
      </div>
    </div>
  );
};

export default PopularTeacherCard;
