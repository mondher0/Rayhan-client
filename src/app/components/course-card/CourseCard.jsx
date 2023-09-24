import Image from "next/image";
import "./Coursecard.css";
import { AiFillStar } from "react-icons/ai";

const CourseCard = () => {
  return (
    <div className="course-card hover">
      <div className="course-img-container">
        <Image
          src="/images/flutter.png"
          alt="Flutter"
          width={450}
          height={200}
          className="img-course"
        />
      </div>
      <div className="course-data">
        <h1>Advanced course of Photoshop! </h1>
        <p className="name">Abd El Madjid</p>
        <div className="rate-price">
          <div className="rate">
            <AiFillStar size={30} color="#FFD700" />
            <AiFillStar size={30} color="#FFD700" />
            <AiFillStar size={30} color="#FFD700" />
            <AiFillStar size={30} color="#FFD700" />
            (4.5)
          </div>
          <div className="price">30 000 DA</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
