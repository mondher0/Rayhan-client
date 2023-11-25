"use client";
import { useRouter } from "next/navigation";
import "./SubjectCard.css";
import Image from "next/image";

const SubjectCard = ({ name, id, image }) => {
  const router = useRouter();
  return (
    <div
      className="subject-card hover"
      onClick={() => {
        router.push(`subjects/${id}?subject=${name}&page=1`);
      }}
    >
      <Image
        src={image ? image : "/images/subject-bg.png"}
        alt="math"
        width={550}
        height={360}
        className="img"
      />
      <div className="subject">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default SubjectCard;
