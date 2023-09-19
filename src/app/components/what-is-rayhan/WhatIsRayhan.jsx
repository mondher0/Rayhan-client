import { useTranslations } from "next-intl";
import "./WhatIsRayhan.css";
import WhatIsRayhanCard from "../what-is-rayhan-card/WhatIsRayhanCard";
import firstCard from "./first-card.png";
import secondCard from "./second-card.png";

const WhatIsRayhan = () => {
  const t = useTranslations("Index");
  return (
    <section className="what-is-rayhan">
      <h3 className="what-is-rayhan-title">
        {t("whatIs")} <span className="rayhan">{t("rayhan")}</span>
      </h3>
      <p className="what-is-rayhan-desc">{t("whatIsDesc")}</p>
      <div className="what-is-rayhan-cards">
        <WhatIsRayhanCard imgUrl={firstCard} text={t("whatIsCard1")} />
        <WhatIsRayhanCard imgUrl={secondCard} text={t("whatIsCard2")} />
      </div>
    </section>
  );
};

export default WhatIsRayhan;
