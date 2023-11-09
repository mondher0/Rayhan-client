"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "./login.css";
import Image from "next/image";
import loginLine from "./login-line.svg";
import LoginWithGoogle from "@/atoms/login-with-google/LoginWithGoogle";
import LoginWithIos from "@/atoms/login-with-ios/LoginWithIos";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import useAuthContext from "@/hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/app/components/loader/Loader";

const LoginPage = () => {
  const router = useRouter();
  const t = useTranslations("Auth");
  const locale = useLocale();
  const { user, setUser, handleLogin, isLoading } = useAuthContext();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-form">
        <ToastContainer />
        <div
          className={
            locale === "ar" ? "login-form login-form-ar" : "login-form"
          }
        >
          <p className="welcome">{t("LoginDesc")}</p>
          <h1 className="title">{t("LoginTitle")}</h1>
          <form onSubmit={handleLogin}>
            <div
              className={
                locale === "ar"
                  ? "form-control form-control-ar"
                  : "form-control"
              }
            >
              <label htmlFor="phone-number">{t("loginPhoneNumber")}</label>
              <input
                type="tel"
                id="phone-number"
                className="input-control"
                onChange={(e) => {
                  setUser({ ...user, phoneNumber: e.target.value });
                }}
              />
            </div>
            <div
              className={
                locale === "ar"
                  ? "form-control form-control-ar"
                  : "form-control"
              }
            >
              <label htmlFor="phone-number">{t("loginPassword")}</label>
              <input
                type="password"
                id="phone-number"
                className="input-control"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <div className={locale === "ar" ? "forgot forgot-ar" : "forgot"}>
              <div className="remember-me">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">{t("loginRemember")}</label>
              </div>
              <p
                className="forgot-password hover"
                onClick={() => {
                  router.push("/login/reset-password");
                }}
              >
                {t("loginForget")}
              </p>
            </div>
            <div className="or">
              <Image src={loginLine} alt="login line" width={150} height={10} />
              <p className="or-text">{t("orLogin")}</p>
              <Image src={loginLine} alt="login line" width={150} height={10} />
            </div>
            <div className="login-with">
              <div className="login-with-google hover">
                <LoginWithGoogle />
              </div>
              <div className="login-with-ios hover">
                <LoginWithIos />
              </div>
            </div>
            <button className="form-control-btn hover" type="submit">
              {isLoading ? <Loader /> : t("loginBtn")}
            </button>
            <p className="dont-have-account">
              {t("loginDontHave")}{" "}
              <span
                className="go-to-register hover"
                onClick={() => {
                  router.push("/register");
                }}
              >
                {t("loginSignUp")}
              </span>
            </p>
          </form>
        </div>
        <div className="login-image">
          <Image
            src="/images/login-student.png"
            alt="Picture of the author"
            width={700}
            height={700}
            className="login-image"
          />
        </div>
      </main>
    </>
  );
};

export default LoginPage;
