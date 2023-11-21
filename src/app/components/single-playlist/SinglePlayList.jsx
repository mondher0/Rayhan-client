"use client";
import Image from "next/image";
import "./SinglePlayList.css";
import { useTranslations } from "next-intl";
import axiosInstance from "@/utils/utils";
import { baseUrl } from "@/utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Loader from "../loader/Loader";
import { useRouter } from "next/navigation";

const SinglePlayList = ({ lesson, independent, courseId, enrollment }) => {
  const t = useTranslations("afterLogin");
  const { id, title, type, price } = lesson || {};
  const [isLoading, setIsloading] = useState();
  const router = useRouter();

  // filter the enrollment contain the lesson id
  console.log(enrollment);
  const enrollmentId = enrollment?.map((enroll) => {
    if (
      enroll.content_id == id &&
      lesson.isEnrolled === true &&
      lesson.isPaid === false
    ) {
      console.log("good");
      return enroll.id;
    } else {
      console.log("bad");
      return false;
    }
  });
  console.log(enrollmentId);

  // lesson enrollment
  const lessonEnrollment = async () => {
    try {
      setIsloading(true);
      const response = await axiosInstance.post(
        `${baseUrl}/enrollment/lesson`,
        {
          lesson_id: id,
        }
      );
      console.log(response);
      setIsloading(false);
      router.push(`/subscribe/${courseId}?lesson=${response.data.data.id}`);
    } catch (error) {
      console.log(error);
      setIsloading(false);
      if (error.response.data.message === "you enrolled this before") {
        router.push(`/subscribe/${courseId}?lesson=${enrollmentId[1]}`);
      }
      toast.error(error.response.data.message);
    }
  };
  console.log(independent);
  return (
    <>
      <div className="single-playlist">
        <ToastContainer />
        <Image
          src={
            type === "quiz" ? "/images/quiz.png" : "/images/playlist-image.png"
          }
          alt="play-list-image"
          width={200}
          height={100}
        />
        <div className="details">
          <p className="title">{type === "quiz" ? "Quizz" : title}</p>
          <p className="duration">{type === "quiz" ? "Quizz" : "1:30"}</p>
        </div>
      </div>
      {independent &&
        (lesson?.isPaid ? null : (
          <button
            className="playlist-btn hover"
            onClick={() => lessonEnrollment()}
          >
            {isLoading ? <Loader /> : t("subscribeBtn") + " " + price + "DA"}
          </button>
        ))}
    </>
  );
};

export default SinglePlayList;
