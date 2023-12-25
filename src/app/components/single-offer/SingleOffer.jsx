"use client";
import Image from "next/image";
import "./SingleOffer.css";
import { BiTimeFive } from "react-icons/bi";
import AllCourses from "../all-courses/AllCourses";
import { useLocale, useTranslations } from "next-intl";
import { calculateDaysLeft } from "@/utils/utils";
import { useRouter } from "next/navigation";

const SingleOffer = ({ offer }) => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  const { title, code, discount, expiration_date, image, price, courses, id } =
    offer || {};
  const { url } = image || {};
  const leftDate = calculateDaysLeft(expiration_date);
  const router = useRouter();
  return (
    <>
      <Image
        src={url}
        alt="single offer image"
        width={1500}
        height={600}
        className="single-offer-img"
      />
      <div className="single-offer">
        <div className="single-offer-desc">
          <p className="single-offer-title">{title} !</p>
          <div className="single-offer-price">
            <span>{price}DA</span>
            <button
              type="button"
              className="hover"
              onClick={() => {
                router.push(`/subscribe/offer/${id}`);
              }}
            >
              {t("subscribeBtn")}
            </button>
          </div>
        </div>
        <p className="the-offer">-{parseInt(discount)}% Off</p>
        <span className="offer-time">
          <BiTimeFive size={30} color="#838E9E" />
          <p>{leftDate}</p>
        </span>
        <div className={locale === "ar" ? "ar" : "p"}>
          <p className="offer-courses-text">{t("coursesOffer")}</p>
        </div>

        <AllCourses style={true} courses={courses} />
      </div>
    </>
  );
};

export default SingleOffer;
