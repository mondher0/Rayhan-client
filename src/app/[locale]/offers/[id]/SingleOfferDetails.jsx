import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./offer-details.css";
import SingleOffer from "@/app/components/single-offer/SingleOffer";
import { useLocale, useTranslations } from "next-intl";
const SingleOfferDetails = ({offer}) => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className="offer-details">
          <div className={locale === "ar" ? "ar" : "p"}>
            <p>{t("offerDetailsTitle")}</p>
          </div>
          <SingleOffer offer={offer} />
        </section>
      </main>
    </>
  );
};

export default SingleOfferDetails;
