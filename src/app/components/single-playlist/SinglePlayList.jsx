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

const SinglePlayList = ({
  lesson,
  independent,
  courseId,
  enrollment,
  categoryId,
}) => {
  const t = useTranslations("afterLogin");
  const { id, title, type, price } = lesson || {};
  const [isLoading, setIsloading] = useState();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [lessonContent, setLessonContent] = useState();
  const [lessonImage, setLessonImage] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [loadImage, setLoadImage] = useState(false);

  // filter the enrollment contain the lesson id
  const enrollmentId = enrollment?.map((enroll) => {
    if (
      enroll.content_id == id &&
      lesson.isEnrolled === true &&
      lesson.isPaid === false
    ) {
      return enroll.id;
    } else {
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
      setLoadImage(true);
      const response = await axiosInstance.get(
        `${baseUrl}/course/lesson/get/${id}`,
        {
          lesson_id: id,
        }
      );
      console.log(response);
      if (response.data.data?.type == "attachment") {
        response.data.data?.attachments?.map((attachment) => {
          if (attachment.type === "image") {
            setLessonImage(attachment.url);
          }
          if (attachment.type === "video") {
            setVideoUrl(attachment.url);
          }
        });
      }
      setLessonContent(response.data.data?.content?.questions);
      setLoadImage(false);
    } catch (error) {
      console.log(error);
      setLoadImage(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (!lesson?.isPaid) {
      return;
    }
    getLessonContent();
  }, []);

  console.log(independent);
  return (
    <>
      <div
        className="single-playlist hover"
        style={{
          opacity: lesson?.isPaid ? 1 : 0.5,
        }}
        onClick={() => {
          if (!lesson?.isPaid) {
            return;
          }
          if (type === "quiz") {
            setOpen(true);
          }
          if (type === "attachment") {
            router.push(
              `/courses/${courseId}?category=${categoryId}&url=${videoUrl}`
            );
          }
        }}
      >
        <ToastContainer />
        {loadImage ? (
          <Loader />
        ) : (
          <Image
            src={
              type === "quiz"
                ? "/images/quiz.png"
                : lessonImage
                ? lessonImage
                : "/images/subject-bg.png"
            }
            alt="play-list-image"
            width={200}
            height={100}
          />
        )}
        <div className="details">
          <p className="title">{title}</p>
          <p className="duration">{type === "quiz" ? "Quiz" : "1:30"}</p>
        </div>
      </div>
      {independent &&
        (lesson?.isPaid ? (
          type === "attachment" ? (
            <button
              className="playlist-btn hover"
              onClick={() =>
                router.push(
                  `/courses/${courseId}?category=${categoryId}&url=${videoUrl}`
                )
              }
            >
              {t("rewatchBtn")}
            </button>
          ) : null
        ) : (
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
