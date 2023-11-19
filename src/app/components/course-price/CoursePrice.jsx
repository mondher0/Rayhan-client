"use client";
import { useRouter } from "next/navigation";
import "./CoursePrice.css";
import { AiFillStar } from "react-icons/ai";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Loader from "../loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "@/utils/constants";
import axiosInstance from "@/utils/utils";

const CoursePrice = ({
  price,
  user,
  lessons,
  comments,
  ratings,
  setIndependent,
  courseId,
}) => {
  const t = useTranslations("afterLogin");
  const router = useRouter();
  const { first_name, last_name } = user || {};
  let index = 0;
  const [isLoading, setIsloading] = useState();

  // lesson enrollment
  const courseEnrollment = async () => {
    try {
      setIsloading(true);
      const response = await axiosInstance.post(
        `${baseUrl}/enrollment/course`,
        {
          course_id: courseId,
        }
      );
      console.log(response);
      setIsloading(false);
      router.push(`/subscribe/${courseId}`);
    } catch (error) {
      console.log(error);
      setIsloading(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="course-price">
      <ToastContainer />
      <div className="course-price-data">
        <div className="course-price-datum">
          <span className="span-price">{t("price")}</span>
          <span className="span-price">{price}Da</span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">{t("instructor")}</span>
          <span className="resp">
            {first_name} {last_name}
          </span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">{t("ratings")}</span>
          <span className="stars">
            {Array.from(
              { length: ratings },
              (_, i) => (
                (index += 1),
                (<AiFillStar size={17} color="#FFD700" key={index} />)
              )
            )}
          </span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">{t("lessons")}</span>
          <span className="resp">{lessons}</span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">{t("comments")}</span>
          <span className="resp">{comments}</span>
        </div>
      </div>
      <div className="course-price-btns">
        <button
          className="subscribe hover"
          onClick={() => {
            courseEnrollment();
          }}
        >
          {isLoading ? <Loader /> : t("subscribeBtn")}
        </button>
        <button className="view hover" onClick={setIndependent}>
          {t("Independent view of the course")}
        </button>
      </div>
    </div>
  );
};

export default CoursePrice;
