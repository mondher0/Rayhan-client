import AllTeachers from "@/app/components/all-teachers/AllTeachers";
import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "../subjects/subjects.css";
import Pagination from "@/app/components/pagination/Pagination";
import { useLocale, useTranslations } from "next-intl";

const page = ({ searchParams }) => {
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
        <section className={locale === "ar" ? "subjects rtl" : "subjects"}>
          <p>{t("teachers")}</p>
          <AllTeachers />
        </section>
        <section
          className={locale === "ar" ? "pagination-bar rtl" : "pagination-bar"}
        >
          <Pagination currentPage={page} url="/teachers" />
        </section>
      </main>
    </>
  );
};

export default page;
