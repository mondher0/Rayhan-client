"use client";
import { useRouter } from "next/navigation";
import "./CoursePrice.css";
import { AiFillStar } from "react-icons/ai";
import { useTranslations } from "next-intl";

const CoursePrice = ({ price, user }) => {
  const t = useTranslations("afterLogin");
  const router = useRouter();
  const { first_name, last_name } = user || {};
  return (
    <div className="course-price">
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
            <AiFillStar size={17} color="#FFD700" />
            <AiFillStar size={17} color="#FFD700" />
            <AiFillStar size={17} color="#FFD700" />
            <AiFillStar size={17} color="#FFD700" />
            <AiFillStar size={17} color="#FFD700" />
          </span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">{t("lessons")}</span>
          <span className="resp">30</span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">{t("quizzes")}</span>
          <span className="resp">5</span>
        </div>
        <div className="course-price-datum">
          <span className="span-price">{t("comments")}</span>
          <span className="resp">20</span>
        </div>
      </div>
      <div className="course-price-btns">
        <button
          className="subscribe hover"
          onClick={() => {
            router.push("/subscribe/5");
          }}
        >
          {t("subscribeBtn")}
        </button>
        <button className="view hover">
          {t("Independent view of the course")}
        </button>
      </div>
    </div>
  );
};

export default CoursePrice;
