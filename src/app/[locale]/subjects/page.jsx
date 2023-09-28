import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./subjects.css";
import AllSubjects from "@/app/components/all-subjects/AllSubjects";
import Pagination from "@/app/components/pagination/Pagination";
import { useLocale, useTranslations } from "next-intl";

const SubjectsPage = ({ searchParams }) => {
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
          <p>{t("subjects")}</p>
        </section>
        <section
          className={
            locale === "ar" ? "pagination-bar rtl rev" : "pagination-bar"
          }
        >
          <Pagination currentPage={page} url="/subjects" />
        </section>
      </main>
    </>
  );
};

export default SubjectsPage;
