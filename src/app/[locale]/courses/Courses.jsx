"use client";
import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./courses.css";
import SearchInput from "@/app/components/search-input/SearchInput";
import AllCourses from "@/app/components/all-courses/AllCourses";
import Pagination from "@/app/components/pagination/Pagination";
import { useLocale, useTranslations } from "next-intl";

const Courses = ({ currentPage, courses, totalPage }) => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  console.log(locale);
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className={locale === "ar" ? "coursess rtl" : "coursess"}>
          <p>{t("courses")}</p>
          <SearchInput />
          <AllCourses courses={courses} />
        </section>
        <section
          className={locale === "ar" ? "pagination-bar rtl" : "pagination-bar"}
        >
          <Pagination
            currentPage={currentPage}
            url="/courses"
            totalPage={totalPage}
          />
        </section>
      </main>
    </>
  );
};

export default Courses;
