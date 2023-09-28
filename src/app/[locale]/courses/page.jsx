import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./courses.css";
import SearchInput from "@/app/components/search-input/SearchInput";
import AllCourses from "@/app/components/all-courses/AllCourses";
import Pagination from "@/app/components/pagination/Pagination";
import { useLocale, useTranslations } from "next-intl";

const CoursesPage = ({ searchParams }) => {
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
        <section className={locale === "ar" ? "courses rtl" : "courses"}>
          <p>{t("courses")}</p>
          <SearchInput />
          <AllCourses />
        </section>
        <section
          className={locale === "ar" ? "pagination-bar rtl" : "pagination-bar"}
        >
          <Pagination currentPage={page} url="/courses" />
        </section>
      </main>
    </>
  );
};

export default CoursesPage;
