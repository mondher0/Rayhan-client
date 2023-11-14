import AllTeachers from "@/app/components/all-teachers/AllTeachers";
import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "../subjects/subjects.css";
import Pagination from "@/app/components/pagination/Pagination";
import { useLocale, useTranslations } from "next-intl";

const Teachers = ({ currentPage, totalPage, teachers }) => {
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
          <AllTeachers teachers={teachers} />
        </section>
        <section
          className={locale === "ar" ? "pagination-bar rtl" : "pagination-bar"}
        >
          <Pagination
            currentPage={currentPage}
            url="/teachers"
            totalPage={totalPage}
          />
        </section>
      </main>
    </>
  );
};

export default Teachers;
