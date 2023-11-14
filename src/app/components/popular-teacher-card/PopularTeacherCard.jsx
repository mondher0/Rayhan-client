"use client";
import Image from "next/image";
import "./PopularTeacherCard.css";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
const PopularTeacherCard = ({ teacher }) => {
  const router = useRouter();
  console.log(teacher);
  const { user, comments, courses, comments_count } = teacher;
  const { last_name, first_name, id } = user;
  console.log("----------------from teahcer card-----------", courses);

  // calculate the moyen of the stars
  const calculateMoyen = (comments) => {
    let sum = 0;
    comments?.map((comment) => {
      let star = parseInt(comment.stars);
      sum += star;
    });
    return Math.round(sum / comments?.length);
  };
  let numberofStars = calculateMoyen(comments);
  numberofStars = parseInt(numberofStars);
  let rating = numberofStars;
  numberofStars = Array(numberofStars).fill(0);

  return (
    <div
      className="popular-teacher-card hover"
      onClick={() => {
        router.push(`/teachers/${id}?page=1`);
      }}
    >
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
        <h1 className="teacher-name">
          {first_name} {last_name}
        </h1>
        <p className="teacher-job">{teacher?.function}</p>
        <p className="teacher-courses">
          {courses?.length} course{courses?.length > 1 ? "s" : ""}
        </p>
        <div className="teacher-rating">
          <div className="ratings">
            {rating}
            {numberofStars.map((index) => (
              <AiFillStar size={20} color="#FFD700" key={index} />
            ))}
          </div>
          ({comments_count})
        </div>
      </div>
    </div>
  );
};

export default PopularTeacherCard;
