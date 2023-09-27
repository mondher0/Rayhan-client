"use client";
import { useRouter } from "next/navigation";
import "./CoursePrice.css";
import { AiFillStar } from "react-icons/ai";

const CoursePrice = () => {
  const router = useRouter();
  return (
    <div className="course-price">
      <div className="course-price-data">
        <div className="course-price-datum">
          <span className="span-price">Price</span>
          <span className="span-price">11000Da</span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">Instructor</span>
          <span className="resp">Wade Warren</span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">Ratings</span>
          <span className="stars">
            <AiFillStar size={17} color="#FFD700" />
            <AiFillStar size={17} color="#FFD700" />
            <AiFillStar size={17} color="#FFD700" />
            <AiFillStar size={17} color="#FFD700" />
            <AiFillStar size={17} color="#FFD700" />
          </span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">Lessons</span>
          <span className="resp">30</span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">Quizzes</span>
          <span className="resp">5</span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">Comments</span>
          <span className="resp">20</span>
        </div>
      </div>
      <div className="course-price-btns">
        <button
          className="subscribe hover"
          onClick={() => {
            router.push("/subscribe/5");
          }}
        >
          Subscribe for the course
        </button>
        <button className="view hover">Independant view of the course</button>
      </div>
    </div>
  );
};

export default CoursePrice;
