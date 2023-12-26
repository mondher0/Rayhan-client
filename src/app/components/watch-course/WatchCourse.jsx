"use client";
import Image from "next/image";
import "./WatchCourse.css";
import start from "./start.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const WatchCourse = ({ course }) => {
  console.log(course);
  const { lessons, title, teacher, id, image } = course || {};
  const { url } = image || {};
  const { user } = teacher || {};
  const { first_name, last_name } = user || {};
  const [progress, setProgress] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const router = useRouter();

  // calculate the progress of the course
  const calculateProgress = () => {
    let progress = 0;
    if (lessons.length === 0) {
      return;
    }

    lessons.forEach((lesson) => {
      if (!lesson.isPassed) {
        if (!currentLesson) {
          setCurrentLesson(lesson.title);
        }
      }
      if (lesson.isPassed) {
        progress += 1;
      }
    });
    setProgress(Math.floor((progress / lessons.length) * 100));
  };

  useEffect(() => {
    calculateProgress();
  }, []);
  return (
    <div
      className="course"
      onClick={() => {
        router.push(`/courses/${id}?category=${id}`);
      }}
    >
      <Image
        src={url || "/images/flutter.png"}
        alt="Flutter"
        width={100}
        height={150}
        className="course-img"
      />
      <div className="course-info">
        <h3 className="course-title">{title}</h3>
        <p className="teacher-name">
          {first_name} {last_name}
        </p>
        <p className="course-content">lecture | {currentLesson}</p>
        <div className="course-progress-container">
          <progress
            className="course-progress"
            value={progress}
            max="100"
          ></progress>
          {progress}%
        </div>
        <button className="course-btn hover">
          Continue
          <Image
            src={start}
            alt="start"
            width={20}
            height={20}
            className="start"
          />
        </button>
      </div>
    </div>
  );
};

export default WatchCourse;
