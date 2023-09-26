import Image from "next/image";
import "./TeacherReviewCard.css";
import { AiFillStar } from "react-icons/ai";

const TeacherReviewCard = () => {
  return (
    <div className="teacher-review-card">
      <div className="teacher-info">
        <div className="teacher-avatar">
          <Image
            src="/images/avatar.png"
            alt="teacher"
            width={50}
            height={50}
          />
        </div>
        <div className="teacher-name">
          <p className="nom">Martin Goutry</p>
          <div className="starts">
            (4.5)
            <AiFillStar size={20} color="#FFD700" />
            <AiFillStar size={20} color="#FFD700" />
            <AiFillStar size={20} color="#FFD700" />
            <AiFillStar size={20} color="#FFD700" />
          </div>
        </div>
      </div>
      <div className="review">
        <p>
          ‘’ the course is finally addressing a long time problem we had when
          building UIs. It’s ease of use and workflow seems really intuitive.
          Promising the course is finally addressing a long time problem we had
          when building UIs. It’s ease of use and workflow seems really
          intuitive. Promisingthe course is finally addressing a long time
          problem we had when building UIs. It’s ease of use and workflow seems
          really intuitive. Promising! ‘’
        </p>
      </div>
    </div>
  );
};

export default TeacherReviewCard;
