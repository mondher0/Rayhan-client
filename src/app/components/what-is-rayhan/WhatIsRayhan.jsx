import { useTranslations } from "next-intl";
import "./WhatIsRayhan.css";

const WhatIsRayhan = () => {
  const t = useTranslations("Index");
  return (
    <section className="what-is-rayhan">
      <h3 className="what-is-rayhan-title">
        {t("whatIs")} <span className="rayhan">{t("rayhan")}</span>
      </h3>
      <p className="what-is-rayhan-desc">{t("whatIsDesc")}</p>
    </section>
  );
};

export default WhatIsRayhan;
