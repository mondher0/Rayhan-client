"use client";
import Image from "next/image";
import "./Coursecard.css";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";

const CourseCard = ({ style, course }) => {
  const router = useRouter();
  console.log(course);
  const { title, teacher, id, price, image } = course || {};
  const { url } = image || {};
  let { total_rate } = course || {};
  const { user } = teacher || {};
  const { first_name, last_name } = user || {};
  const totalRate = total_rate;
  total_rate = Array(parseInt(total_rate) || 0).fill(0);

  return (
    <div
      className={
        style ? "course-card hover course-card-style" : "course-card hover"
      }
      onClick={() => {
        router.push(`/courses/${id}?category=${course?.category?.id}`);
      }}
    >
      <div className="course-img-container">
        <Image
          src={url || "/images/flutter.png"}
          alt={title}
          width={450}
          height={200}
          className="img-course"
        />
      </div>
      <div className="course-data">
        <h1>{title} </h1>
        <p className="name">
          {first_name} {last_name}
        </p>
        <div className="rate-price">
          <div className="rate">
            {total_rate.map((index) => (
              <AiFillStar size={20} color="#FFD700" key={index} />
            ))}
            ({parseInt(totalRate) || 0})
          </div>
          <div className="price">{price} DA</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
