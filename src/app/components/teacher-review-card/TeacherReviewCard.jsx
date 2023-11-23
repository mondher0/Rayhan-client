import Image from "next/image";
import "./TeacherReviewCard.css";
import { AiFillStar } from "react-icons/ai";

const TeacherReviewCard = ({ review }) => {
  const { content, stars, student } = review;
  console.log(stars);
  const { user } = student || {};
  const { first_name, last_name } = user || {};
  const ratings = Array(parseInt(stars) || 0).fill(0);
  console.log(ratings);

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
          <p className="nom">
            {first_name} {last_name}
          </p>
          <div className="starts">
            ({stars})
            {ratings.map((index) => (
              <AiFillStar size={20} color="#FFD700" key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="review">
        <p>‘’ {content}‘’</p>
      </div>
    </div>
  );
};

export default TeacherReviewCard;
