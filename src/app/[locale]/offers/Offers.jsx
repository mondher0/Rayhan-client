import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./offers.css";
import AllOffers from "@/app/components/all-offers/AllOffers";
import Pagination from "@/app/components/pagination/Pagination";
import { useLocale, useTranslations } from "next-intl";

const Offers = ({ offers, currentPage, totalPage }) => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className={locale === "ar" ? "offers rtl" : "offers"}>
          <p>{t("offers")}</p>
          <AllOffers offers={offers} />
        </section>
        <section
          className={locale === "ar" ? "pagination-bar rtl" : "pagination-bar"}
        >
          <Pagination
            currentPage={currentPage}
            url="/offers"
            totalPage={totalPage}
          />
        </section>
      </main>
    </>
  );
};

export default Offers;
