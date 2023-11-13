"use client";
import { useTranslations } from "next-intl";
import "./OfferCard.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiTimeFive } from "react-icons/bi";
import { calculateDaysLeft } from "@/utils/utils";

const OfferCard = ({ offer }) => {
  const router = useRouter();
  const t = useTranslations("afterLogin");
  const { title, description, price, discount, image, expiration_date } = offer;
  const leftDate = calculateDaysLeft(expiration_date);
  return (
    <div className="offer-card">
      <Image
        src="/images/offer-img.png"
        alt="offer image"
        width={600}
        height={300}
        className="offer-img"
      />
      <div className="offer-text">
        <p className="offer-title">{title}!</p>
        <p className="offer-goale">-{discount}% Off</p>
        <span className="offer-time">
          <BiTimeFive />
          <p>{leftDate}</p>
        </span>
        <div className="offer-price">
          <p className="offer-price-text">12000Da</p>
          <p
            className="see-more hover"
            onClick={() => {
              router.push("/offers/1");
            }}
          >
            {t("seeDetails")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
