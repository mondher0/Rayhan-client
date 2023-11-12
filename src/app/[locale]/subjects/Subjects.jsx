import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./subjects.css";
import AllSubjects from "@/app/components/all-subjects/AllSubjects";
import Pagination from "@/app/components/pagination/Pagination";
import { useLocale, useTranslations } from "next-intl";

const Subjects = ({ subjects, currentPage, totalPage }) => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  console.log(
    "------------------subjects component------------------",
    subjects
  );
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className={locale === "ar" ? "subjects rtl" : "subjects"}>
          <p>{t("subjects")}</p>
          <AllSubjects subjects={subjects} />
        </section>
        <section
          className={
            locale === "ar" ? "pagination-bar rtl rev" : "pagination-bar"
          }
        >
          <Pagination currentPage={currentPage} url="/subjects" totalPage={totalPage} />
        </section>
      </main>
    </>
  );
};

export default Subjects;
