import Image from "next/image";
import "./AllInOneCard.css";
const AllInOneCard = ({ card }) => {
  return <Image src={card} alt="card" width={400} height={400} className="all-in-one-card" />;
};

export default AllInOneCard;
