import "./CompaniesIcons.css";
import Image from "next/image";

const CompaniesIcons = ({ partners }) => {
  return (
    <div className="companies-icons">
      {partners?.map((partner) => {
        const { name, img } = partner || {};
        return <Image src={img || ""} alt={name} width={100} height={100} />;
      })}
    </div>
  );
};

export default CompaniesIcons;
