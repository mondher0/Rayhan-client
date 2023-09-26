import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./subscribe-page.css";
import PaymentMethod from "@/app/components/payment-method/PaymentMethod";
import CourseCard from "@/app/components/course-card/CourseCard";

const SubscribePage = () => {
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <p className="title">Subscription</p>
        <div className="subscription-content">
          <PaymentMethod />
          <div className="subscription-course">
            <p className="subscription-course-title">Order details</p>
            <CourseCard />
            <div className="subscription-price">
              <span>Price</span>
              <span>11 000 DA</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SubscribePage;
