import Image from "next/image";
import "./Notifications.css";
import singleNotIcon from "./single-not-icon.svg";
import { useLocale } from "next-intl";

const Notifications = () => {
  const locale = useLocale();
  return (
    <div
      className={locale === "ar" ? "notifications ar" : "notifications"}
    >
      <div className="notifications-title">
        <p className="title">Notifications</p>
        <p className="as-read hover">Mark all as read</p>
      </div>
      <div className="single-not">
        <Image
          src={singleNotIcon}
          alt="single-not-icon"
          width={50}
          height={50}
        />
        <div className="single-not-details">
          <p className="not-title">Subscription reminder</p>
          <p className="not-text">
            Your subscription is about to expire. Renew now to continue enjoying
            uninterrupted access to all our premium features!
          </p>
          <p className="time">2 hours ago</p>
        </div>
      </div>
      <div className="single-not">
        <Image
          src={singleNotIcon}
          alt="single-not-icon"
          width={50}
          height={50}
        />
        <div className="single-not-details">
          <p className="not-title">Subscription reminder</p>
          <p className="not-text">
            Your subscription is about to expire. Renew now to continue enjoying
            uninterrupted access to all our premium features!
          </p>
          <p className="time">2 hours ago</p>
        </div>
      </div>
      <div className="single-not">
        <Image
          src={singleNotIcon}
          alt="single-not-icon"
          width={50}
          height={50}
        />
        <div className="single-not-details">
          <p className="not-title">Subscription reminder</p>
          <p className="not-text">
            Your subscription is about to expire. Renew now to continue enjoying
            uninterrupted access to all our premium features!
          </p>
          <p className="time">2 hours ago</p>
        </div>
      </div>
      <div className="single-not">
        <Image
          src={singleNotIcon}
          alt="single-not-icon"
          width={50}
          height={50}
        />
        <div className="single-not-details">
          <p className="not-title">Subscription reminder</p>
          <p className="not-text">
            Your subscription is about to expire. Renew now to continue enjoying
            uninterrupted access to all our premium features!
          </p>
          <p className="time">2 hours ago</p>
        </div>
      </div>
      <div className="single-not">
        <Image
          src={singleNotIcon}
          alt="single-not-icon"
          width={50}
          height={50}
        />
        <div className="single-not-details">
          <p className="not-title">Subscription reminder</p>
          <p className="not-text">
            Your subscription is about to expire. Renew now to continue enjoying
            uninterrupted access to all our premium features!
          </p>
          <p className="time">2 hours ago</p>
        </div>
      </div>
      <div className="single-not">
        <Image
          src={singleNotIcon}
          alt="single-not-icon"
          width={50}
          height={50}
        />
        <div className="single-not-details">
          <p className="not-title">Subscription reminder</p>
          <p className="not-text">
            Your subscription is about to expire. Renew now to continue enjoying
            uninterrupted access to all our premium features!
          </p>
          <p className="time">2 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
