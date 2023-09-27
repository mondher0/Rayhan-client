"use client";
import Image from "next/image";
import "./Coursecard.css";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";

const CourseCard = ({ style }) => {
  const router = useRouter();
  return (
    <div
      className={
        style ? "course-card hover course-card-style" : "course-card hover"
      }
      onClick={() => {
        router.push("/courses/5");
      }}
    >
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
