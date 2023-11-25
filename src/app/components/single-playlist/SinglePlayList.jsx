"use client";
import Image from "next/image";
import "./SinglePlayList.css";
import { useTranslations } from "next-intl";
import axiosInstance from "@/utils/utils";
import { baseUrl } from "@/utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { useRouter } from "next/navigation";
import QuizModal from "../quiz-modal/QuizModal";

const SinglePlayList = ({ lesson, independent, courseId, enrollment }) => {
  const t = useTranslations("afterLogin");
  const { id, title, type, price } = lesson || {};
  const [isLoading, setIsloading] = useState();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [lessonContent, setLessonContent] = useState();

  // filter the enrollment contain the lesson id
  console.log(enrollment);
  const enrollmentId = enrollment?.map((enroll) => {
    console.log(enroll.content_id);
    console.log(id);
    console.log(lesson.isEnrolled);
    console.log(lesson.isPaid);
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
  const newId = enrollmentId?.filter((id) => id !== false);

  // lesson enrollment
  const lessonEnrollment = async () => {
    if (lesson.isEnrolled) {
      router.push(`/subscribe/${courseId}?lesson=${newId[0]}`);
      return;
    }
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
      toast.error(error.response.data.message);
    }
  };

  // get lesson content
  const getLessonContent = async () => {
    try {
      const response = await axiosInstance.get(
        `${baseUrl}/course/lesson/get/${id}`,
        {
          lesson_id: id,
        }
      );
      console.log(response);
      setLessonContent(response.data.data.content.questions);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getLessonContent();
  }, []);

  console.log(independent);
  return (
    <>
      <div
        className="single-playlist hover"
        onClick={() => {
          if (type === "quiz") {
            setOpen(true);
          }
        }}
      >
        <ToastContainer />
        <Image
          src={
            type === "quiz" ? "/images/quiz.png" : "/images/play-list-image.png"
          }
          alt="play-list-image"
          width={200}
          height={100}
        />
        <div className="details">
          <p className="title">{title}</p>
          <p className="duration">{type === "quiz" ? "Quiz" : "1:30"}</p>
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
      <QuizModal
        open={open}
        onClose={closeModal}
        courseId={courseId}
        lessonId={id}
        content={lessonContent}
      />
    </>
  );
};

export default SinglePlayList;
