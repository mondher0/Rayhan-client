import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./home.css";
import WatchedCourses from "@/app/components/watched-courses/WatchedCourses";
import FeaturesCourses from "@/app/components/features-courses/FeaturesCourses";
import PopularTeachers from "@/app/components/popular-teachers/PopularTeachers";
import { useLocale, useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className={locale === "ar" ? "features reversed" : "features"}>
          <div className="watched-and-teachers">
            <div className="watched">
              <h1 className="watched-title">{t("continueYourCourses")}</h1>
              <WatchedCourses />
            </div>
            <div className="teachers">
              <h1 className="watched-title">{t("popularTeacher")}</h1>
              <PopularTeachers />
            </div>
          </div>
          <FeaturesCourses />
        </section>
      </main>
    </>
  );
};

export default HomePage;
