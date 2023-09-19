import { useLocale, useTranslations } from "next-intl";
import "./AllInOne.css";
import AllInOneCard from "../all-in-one-card/AllInOneCard";
import invoiceCard from "./invoice-card.svg";
import CalendarCard from "./calendar-card.svg";
import trackCard from "./track-card.svg";
import invoiceCardAr from "./invoice-card-arab.svg";
import CalendarCardAr from "./calendar-card-arab.svg";
import trackCardAr from "./track-card-arab.svg";
import invoiceCardFr from "./invoice-card-fr.svg";
import CalendarCardFr from "./calendar-card-fr.svg";
import trackCardFr from "./track-card-fr.svg";

const AllInOne = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <section className="all-in-one">
      <h3 className="all-in-one-title">
        {t("allInOne")} <span className="rayhan">{t("eLearning")}</span>
      </h3>
      <p className="all-in-one-desc">{t("allInOneDesc")}</p>
      <div className="all-in-one-cards">
        {locale === "en-" ? (
          <>
            <AllInOneCard card={invoiceCard} />
            <AllInOneCard card={CalendarCard} />
            <AllInOneCard card={trackCard} />
          </>
        ) : locale === "ar" ? (
          <>
            <AllInOneCard card={invoiceCardAr} />
            <AllInOneCard card={CalendarCardAr} />
            <AllInOneCard card={trackCardAr} />
          </>
        ) : (
          <>
            <AllInOneCard card={invoiceCardFr} />
            <AllInOneCard card={CalendarCardFr} />
            <AllInOneCard card={trackCardFr} />
          </>
        )}
      </div>
    </section>
  );
};

export default AllInOne;
