import Image from "next/image";
import "./SingleOffer.css";
import { BiTimeFive } from "react-icons/bi";
import AllCourses from "../all-courses/AllCourses";
import { useLocale, useTranslations } from "next-intl";
import { calculateDaysLeft } from "@/utils/utils";

const SingleOffer = ({ offer }) => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  const { title, code, discount, expiration_date } = offer;
  const leftDate = calculateDaysLeft(expiration_date);
  return (
    <>
      <Image
        src="/images/single-offer.png"
        alt="single offer image"
        width={1500}
        height={600}
        className="single-offer-img"
      />
      <div className="single-offer">
        <div className="single-offer-desc">
          <p className="single-offer-title">{title} !</p>
          <div className="single-offer-price">
            <span>12000Da</span>
            <button type="button" className="hover">
              {t("subscribeBtn")}
            </button>
          </div>
        </div>
        <p className="the-offer">-{discount}% Off</p>
        <span className="offer-time">
          <BiTimeFive size={30} color="#838E9E" />
          <p>{leftDate}</p>
        </span>
        <div className={locale === "ar" ? "ar" : "p"}>
          <p className="offer-courses-text">{t("coursesOffer")}</p>
        </div>

        <AllCourses style={true} />
      </div>
    </>
  );
};

export default SingleOffer;
