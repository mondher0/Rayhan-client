import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./profile.css";
import Profile from "@/app/components/profile/Profile";
import { useLocale, useTranslations } from "next-intl";

const ProfilePage = () => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();

  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section
          className={locale === "ar" ? "profile-section profile-section-ar" : "profile-section"}
        >
          <p className="title">{t("profile")}</p>
          <Profile />
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
