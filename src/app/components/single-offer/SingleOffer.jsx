import Image from "next/image";
import "./SingleOffer.css";
import { BiTimeFive } from "react-icons/bi";
import AllCourses from "../all-courses/AllCourses";

const SingleOffer = () => {
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
          <p className="single-offer-title">Get Three Courses at once !</p>
          <div className="single-offer-price">
            <span>12000Da</span>
            <button type="button" className="hover">
              Subscribe for the offer
            </button>
          </div>
        </div>
        <p className="the-offer">-30% Off</p>
        <span className="offer-time">
          <BiTimeFive size={30} color="#838E9E" />
          <p>2 days left</p>
        </span>
        <p className="offer-courses-text">
          this offer will be applied in this courses :
        </p>
        <AllCourses style={true} />
      </div>
    </>
  );
};

export default SingleOffer;
