"use client";
import Image from "next/image";
import "./SinglePlaylist.css";
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
  const [attachments, setAttachments] = useState();
  const [file, setFile] = useState();

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
        },
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
        },
      );
      console.log(response);
      if (response.data.data?.type == "attachment") {
        setAttachments(response.data.data?.attachments);
        response.data.data?.attachments?.map((attachment) => {
          if (attachment.type === "image") {
            setLessonImage(attachment.url);
          }
          if (attachment.type === "video") {
            setVideoUrl(attachment.url);
          }
          if (attachment.type === "file") {
            setFile(attachment.url);
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
            return;
          }
          if (file) {
            window.open(file, "_blank");
            return;
          }
          if (lessonImage) {
            window.open(lessonImage, "_blank");
            return;
          }
          router.push(
            `/courses/${courseId}?category=${categoryId}&url=https://www.youtube.com/embed/tzEFe4OQ1MU?si=u-mHe04x_SsFgrU9"F`,
          );
        }}
      >
        <ToastContainer />
        {loadImage ? (
          <Loader />
        ) : type === "quiz" ? (
          <div className="lesson-cover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.4993 30.0002C19.4775 30.0002 23.2928 28.4199 26.1059 25.6068C28.9189 22.7938 30.4993 18.9785 30.4993 15.0002C30.4993 11.022 28.9189 7.20669 26.1059 4.39364C23.2928 1.5806 19.4775 0.000244141 15.4993 0.000244141C11.521 0.000244141 7.70571 1.5806 4.89267 4.39364C2.07962 7.20669 0.499268 11.022 0.499268 15.0002C0.499268 18.9785 2.07962 22.7938 4.89267 25.6068C7.70571 28.4199 11.521 30.0002 15.4993 30.0002ZM9.73739 9.35649C9.20302 10.1609 8.93677 10.9559 8.93677 11.7377C8.93677 12.1184 9.10552 12.4727 9.44302 12.799C9.78052 13.1252 10.193 13.2865 10.6824 13.2865C11.513 13.2865 12.0774 12.8215 12.3755 11.8877C12.6905 10.9971 13.0749 10.3221 13.5305 9.86274C13.9861 9.40524 14.693 9.17649 15.6568 9.17649C16.4799 9.17649 17.1511 9.40149 17.6724 9.85712C18.1918 10.3109 18.4524 10.8696 18.4524 11.5296C18.4547 11.8607 18.3665 12.1862 18.1974 12.4709C18.0254 12.7611 17.8133 13.0256 17.5674 13.2565C17.1729 13.6172 16.7677 13.9661 16.3524 14.3027C15.7149 14.8315 15.2068 15.2871 14.8299 15.6715C14.4549 16.0559 14.1511 16.5021 13.9243 17.0084C13.3205 19.3427 16.4555 19.5302 17.1793 17.8634C17.2674 17.7021 17.4005 17.5259 17.5786 17.3309C17.7586 17.1377 17.9968 16.9127 18.2949 16.6559C19.0535 16.024 19.7999 15.3776 20.5336 14.7171C20.948 14.3346 21.3061 13.8771 21.608 13.3484C21.9192 12.7841 22.0757 12.1476 22.0618 11.5034C22.0618 10.6127 21.7974 9.78774 21.2668 9.02837C20.738 8.26712 19.988 7.66712 19.0168 7.22462C18.0455 6.78399 16.9261 6.56274 15.6568 6.56274C14.2918 6.56274 13.0974 6.82524 12.0736 7.35587C11.0499 7.88462 10.2718 8.55212 9.73739 9.35649ZM13.7499 22.6315C13.7499 23.1288 13.9474 23.6057 14.2991 23.9573C14.6507 24.3089 15.1276 24.5065 15.6249 24.5065C16.1222 24.5065 16.5991 24.3089 16.9507 23.9573C17.3023 23.6057 17.4999 23.1288 17.4999 22.6315C17.4999 22.1342 17.3023 21.6573 16.9507 21.3057C16.5991 20.954 16.1222 20.7565 15.6249 20.7565C15.1276 20.7565 14.6507 20.954 14.2991 21.3057C13.9474 21.6573 13.7499 22.1342 13.7499 22.6315Z"
                fill="white"
              />
            </svg>
          </div>
        ) : lessonImage || file ? (
          <div className="lesson-cover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="37"
              viewBox="0 0 28 37"
              fill="none"
            >
              <path
                d="M16.9085 0.447021H4.99927C3.80579 0.447021 2.6612 0.921127 1.81729 1.76504C0.973373 2.60895 0.499268 3.75355 0.499268 4.94702V31.947C0.499268 33.1405 0.973373 34.2851 1.81729 35.129C2.6612 35.9729 3.80579 36.447 4.99927 36.447H22.9993C24.1927 36.447 25.3373 35.9729 26.1812 35.129C27.0252 34.2851 27.4993 33.1405 27.4993 31.947V11.0378C27.4991 10.4411 27.262 9.86888 26.84 9.44702L18.4993 1.10627C18.0774 0.684285 17.5052 0.447149 16.9085 0.447021ZM17.3743 8.32202V3.82202L24.1243 10.572H19.6243C19.0275 10.572 18.4552 10.335 18.0333 9.91301C17.6113 9.49105 17.3743 8.91876 17.3743 8.32202ZM6.12427 20.697C5.8259 20.697 5.53975 20.5785 5.32877 20.3675C5.11779 20.1565 4.99927 19.8704 4.99927 19.572C4.99927 19.2737 5.11779 18.9875 5.32877 18.7765C5.53975 18.5655 5.8259 18.447 6.12427 18.447H21.8743C22.1726 18.447 22.4588 18.5655 22.6698 18.7765C22.8807 18.9875 22.9993 19.2737 22.9993 19.572C22.9993 19.8704 22.8807 20.1565 22.6698 20.3675C22.4588 20.5785 22.1726 20.697 21.8743 20.697H6.12427ZM4.99927 24.072C4.99927 23.7737 5.11779 23.4875 5.32877 23.2765C5.53975 23.0655 5.8259 22.947 6.12427 22.947H21.8743C22.1726 22.947 22.4588 23.0655 22.6698 23.2765C22.8807 23.4875 22.9993 23.7737 22.9993 24.072C22.9993 24.3704 22.8807 24.6565 22.6698 24.8675C22.4588 25.0785 22.1726 25.197 21.8743 25.197H6.12427C5.8259 25.197 5.53975 25.0785 5.32877 24.8675C5.11779 24.6565 4.99927 24.3704 4.99927 24.072ZM6.12427 29.697C5.8259 29.697 5.53975 29.5785 5.32877 29.3675C5.11779 29.1565 4.99927 28.8704 4.99927 28.572C4.99927 28.2737 5.11779 27.9875 5.32877 27.7765C5.53975 27.5655 5.8259 27.447 6.12427 27.447H15.1243C15.4226 27.447 15.7088 27.5655 15.9198 27.7765C16.1307 27.9875 16.2493 28.2737 16.2493 28.572C16.2493 28.8704 16.1307 29.1565 15.9198 29.3675C15.7088 29.5785 15.4226 29.697 15.1243 29.697H6.12427Z"
                fill="white"
              />
            </svg>
          </div>
        ) : (
          <Image
            src={"/images/subject-bg.png"}
            alt="play-list-image"
            width={200}
            height={100}
          />
        )}
        <div className="details">
          <p className="title">{title}</p>
          <p className="duration">
            {type === "quiz"
              ? "Quiz"
              : file
              ? "Pdf"
              : lessonImage
              ? "Image"
              : "1:30"}
          </p>
        </div>
      </div>
      {independent &&
        (lesson?.isPaid ? (
          videoUrl ? (
            <button
              className="playlist-btn hover"
              onClick={() =>
                // router.push(
                //   `/courses/${courseId}?category=${categoryId}&url=${videoUrl}`,
                // )
                router.push(
                  `/courses/${courseId}?category=${categoryId}&url=https://www.youtube.com/embed/tzEFe4OQ1MU?si=u-mHe04x_SsFgrU9"F`,
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
