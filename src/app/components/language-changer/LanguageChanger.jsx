import Image from "next/image";
import "./LanguageChanger.css";
import usa from "./usa.svg";
import fr from "./fr.png";
import dz from "./dz.png";
import { useLocale } from "next-intl";
import Link from "next-intl/link";
import downArrow from "./down-arrow.svg";
import { usePathname } from "next/navigation";

const LanguageChanger = ({
  setShowLanguage,
  showLanguage,
  setShowNotifications,
}) => {
  const locale = useLocale();
  const path = usePathname();
  console.log("-----------path-----------", path);
  return (
    <div
      className="language-changer hover"
      onClick={() => {
        setShowLanguage(!showLanguage);
        setShowNotifications(false);
      }}
    >
      <Image
        src={locale === "en" ? usa : locale === "fr" ? fr : dz}
        alt="usa"
        width={30}
        height={30}
      />
      <p className="current-language">{locale === "ar" ? "عر" : locale}</p>
      <Image
        src={downArrow}
        alt="down-arrow"
        width={20}
        height={20}
        className="down-arrow"
      />
      {showLanguage && (
        <div className="languages">
          <Link href="/home" locale="en">
            <div className="language">
              <Image src={usa} alt="usa" width={30} height={30} />
              <p className="current-language">EN</p>
            </div>
          </Link>
          <Link href="/home" locale="ar">
            <div className="language">
              <Image src={dz} alt="usa" width={30} height={30} />
              <p className="current-language">AR</p>
            </div>
          </Link>
          <Link href="/home" locale="fr">
            <div className="language">
              <Image src={fr} alt="usa" width={30} height={30} />
              <p className="current-language">FR</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LanguageChanger;
