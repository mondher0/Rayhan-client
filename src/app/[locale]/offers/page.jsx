import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./offers.css";
import AllOffers from "@/app/components/all-offers/AllOffers";
import Pagination from "@/app/components/pagination/Pagination";
import { useLocale, useTranslations } from "next-intl";

const OffresPage = ({ searchParams }) => {
  const { page } = searchParams;
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
          <AllOffers />
        </section>
        <section
          className={locale === "ar" ? "pagination-bar rtl" : "pagination-bar"}
        >
          <Pagination currentPage={page} url="/offers" />
        </section>
      </main>
    </>
  );
};

export default OffresPage;
