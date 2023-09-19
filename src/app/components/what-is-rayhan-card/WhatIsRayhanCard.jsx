import Image from "next/image";
import "./WhatIsRayhanCard.css";

const WhatIsRayhanCard = ({ imgUrl, text }) => {
  return (
    <div className="what-is-rayhan-card">
      <div className="overlay"></div>
      <Image src={imgUrl} alt="what-is-rayhan-card" width={300} height={200} className="img" />
      <span>{text}</span>
    </div>
  );
};

export default WhatIsRayhanCard;
