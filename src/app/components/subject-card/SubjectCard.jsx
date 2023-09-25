"use client";
import { useRouter } from "next/navigation";
import "./SubjectCard.css";
import Image from "next/image";

const SubjectCard = () => {
  const router = useRouter();
  return (
    <div
      className="subject-card hover"
      onClick={() => {
        router.push("subjects/math?page=1");
      }}
    >
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
