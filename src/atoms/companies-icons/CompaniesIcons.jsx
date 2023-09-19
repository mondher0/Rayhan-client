import "./CompaniesIcons.css";
import google from "./google.svg";
import facebook from "./facebook.svg";
import grab from "./grab.svg";
import netflix from "./netflix.svg";
import airbnb from "./airbnb.svg";
import amazon from "./amazon.svg";
import Image from "next/image";

const CompaniesIcons = () => {
  return (
    <div className="companies-icons">
      <Image src={google} alt="google" width={100} className="companie-icon" />
      <Image
        src={netflix}
        alt="netflix"
        width={100}
        className="companie-icon"
      />
      <Image src={airbnb} alt="airbnb" width={100} className="companie-icon" />
      <Image
        src={amazon}
        alt="amazon"
        width={100}
        className="amazon companie-icon"
      />
      <Image
        src={facebook}
        alt="facebook"
        width={100}
        className="companie-icon"
      />
      <Image src={grab} alt="grab" width={100} className="companie-icon" />
    </div>
  );
};

export default CompaniesIcons;
