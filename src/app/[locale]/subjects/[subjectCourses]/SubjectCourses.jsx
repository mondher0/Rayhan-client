import AllCourses from "@/app/components/all-courses/AllCourses";
import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "../subjects.css";
import Pagination from "@/app/components/pagination/Pagination";
import { useLocale, useTranslations } from "next-intl";

const SubjectCourses = ({
  subjectCourses,
  currentPage,
  courses,
  totalPage,
  subjectName,
}) => {
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
              ? `${t("subjects")}/ ${subjectName}`
              : `${t("subjects")}/ ${subjectName}`}
          </p>
          <AllCourses courses={courses} />
        </section>
        <section
          className={locale === "ar" ? "pagination-bar rtl" : "pagination-bar"}
        >
          <Pagination
            currentPage={currentPage}
            url={`/subjects/${subjectCourses}`}
            totalPage={totalPage}
          />
        </section>
      </main>
    </>
  );
};

export default SubjectCourses;
