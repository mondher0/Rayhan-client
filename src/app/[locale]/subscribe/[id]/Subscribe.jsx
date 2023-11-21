import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./subscribe-page.css";
import PaymentMethod from "@/app/components/payment-method/PaymentMethod";
import CourseCard from "@/app/components/course-card/CourseCard";
import { useLocale, useTranslations } from "next-intl";

const Subscribe = ({ course, id, lesson, enrollment }) => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  const { price } = course || {};
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main className={locale === "ar" ? "ar" : ""}>
        <p className="title">{t("subscriptions")}</p>
        <div className="subscription-content">
          <PaymentMethod id={id} lesson={lesson} enrollment={enrollment} />
          <div className="subscription-course">
            <p className="subscription-course-title">{t("orderDetails")}</p>
            <CourseCard course={course} />
            <div className="subscription-price">
              <span>{t("price")}</span>
              <span>{price} DA</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Subscribe;
