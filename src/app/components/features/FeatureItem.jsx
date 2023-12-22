import Image from "next/image";
import "./Features.css";
import { useLocale } from "next-intl";

const FeatureItem = ({ text, icon }) => {
  const locale = useLocale();
  return (
    <li
      className={
        locale === "ar" ? "feature-item item-reversed" : "feature-item"
      }
    >
      <div className="icon">
        <Image
          src={icon}
          alt="feature icon"
          width={70}
          height={70}
          className="item-img"
        />
      </div>
      <span className="item-text">{text}</span>
    </li>
  );
};

export default FeatureItem;
