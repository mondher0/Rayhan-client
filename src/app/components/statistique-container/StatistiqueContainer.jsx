import Image from "next/image";
import "./StatistiqueContainer.css";

const StatistiqueContainer = ({ stat1, number, text, stat2 }) => {
  return (
    <div className="statistique-container">
      <Image src={stat1} width={50} height={50} alt={text} />
      <div className="stat-desc">
        <p className="stat-number">{number}</p>
        <p className="stat-text">{text}</p>
      </div>
      {stat2 && <Image src={stat2} width={50} height={50} alt={text} />}
    </div>
  );
};

export default StatistiqueContainer;
