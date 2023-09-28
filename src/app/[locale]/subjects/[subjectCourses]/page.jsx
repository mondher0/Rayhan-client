import AllCourses from "@/app/components/all-courses/AllCourses";
import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "../subjects.css";
import Pagination from "@/app/components/pagination/Pagination";
import { useLocale, useTranslations } from "next-intl";

const SubjectCoursespage = ({ searchParams, params }) => {
  const { page } = searchParams;
  const { subjectCourses } = params;
  console.log("------------------ SubjectCoursespage ------------------");
  console.log(subjectCourses);
  const locale = useLocale();
  const t = useTranslations("afterLogin");
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className={locale === "ar" ? "subjects rtl" : "subjects"}>
          <p>
            {locale === "ar"
              ? `${t("subjects")}/ ${subjectCourses}`
              : `${t("subjects")}/ ${subjectCourses}`}
          </p>
          <AllCourses />
        </section>
        <section
          className={locale === "ar" ? "pagination-bar rtl" : "pagination-bar"}
        >
          <Pagination currentPage={page} url={`/subjects/${subjectCourses}`} />
        </section>
      </main>
    </>
  );
};

export default SubjectCoursespage;
