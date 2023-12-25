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
  const { url } = image || {};
  const leftDate = calculateDaysLeft(expiration_date);
  return (
    <div className="offer-card">
      <Image
        src={url}
        alt="offer image"
        width={600}
        height={300}
        className="offer-img"
      />
      <div className="offer-text">
        <p className="offer-title">{title}!</p>
        <p className="offer-goale">-{parseInt(discount)}% Off</p>
        <span className="offer-time">
          <BiTimeFive />
          <p>{leftDate}</p>
        </span>
        <div className="offer-price">
          <p className="offer-price-text">{price}DA</p>
          <p
            className="see-more hover"
            onClick={() => {
              router.push(`/offers/${offer.id}`);
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
