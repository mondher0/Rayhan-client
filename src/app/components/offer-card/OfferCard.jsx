"use client";
import "./OfferCard.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiTimeFive } from "react-icons/bi";

const OfferCard = () => {
  const router = useRouter();
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
        <p className="offer-title">Get Three Courses at once !</p>
        <p className="offer-goale">-30% Off</p>
        <span className="offer-time">
          <BiTimeFive />
          <p>2 days left</p>
        </span>
        <div className="offer-price">
          <p className="offer-price-text">12000Da</p>
          <p
            className="see-more hover"
            onClick={() => {
              router.push("/offers/1");
            }}
          >
            SEE DETAILS
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
