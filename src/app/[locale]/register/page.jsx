"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../login/login.css";
import Image from "next/image";
import loginLine from "../login/login-line.svg";
import LoginWithGoogle from "@/atoms/login-with-google/LoginWithGoogle";
import LoginWithIos from "@/atoms/login-with-ios/LoginWithIos";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import useAuthContext from "@/hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/app/components/loader/Loader";

const RegisterPage = () => {
  const router = useRouter();
  const t = useTranslations("Auth");
  const locale = useLocale();
  const {
    user,
    setUser,
    handleRegister,
    verifyReferalCode,
    getTempCode,
    isLoading,
  } = useAuthContext();
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
          <h1 className="title">{t("SignUpTitle")}</h1>
          <form
            onSubmit={(e) => {
              if (user.referralCode) {
                verifyReferalCode(e);
              } else {
                e.preventDefault();
                getTempCode();
              }
            }}
          >
            <div className="input-container">
              <div
                className={
                  locale === "ar"
                    ? "form-half-control form-half-control-ar"
                    : "form-half-control"
                }
              >
                <label htmlFor="first-name">{t("signUpFirstName")}</label>
                <input
                  type="text"
                  id="first-name"
                  className="input-control"
                  onChange={(e) =>
                    setUser({
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div
                className={
                  locale === "ar"
                    ? "form-half-control form-half-control-ar"
                    : "form-half-control"
                }
              >
                <label htmlFor="last-name">{t("signUpLastName")}</label>
                <input
                  type="text"
                  id="last-name"
                  className="input-control"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div
              className={
                locale === "ar"
                  ? "form-control form-control-ar"
                  : "form-control"
              }
            >
              <label htmlFor="phone-number">{t("signUpPhoneNumber")}</label>
              <input
                type="tel"
                id="phone-number"
                className="input-control"
                onChange={(e) =>
                  setUser({
                    ...user,
                    phoneNumber: e.target.value,
                  })
                }
              />
            </div>
            <div
              className={
                locale === "ar"
                  ? "form-control form-control-ar"
                  : "form-control"
              }
            >
              <label htmlFor="password">{t("signUpPassword")}</label>
              <input
                type="password"
                id="password"
                className="input-control"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div
              className={
                locale === "ar"
                  ? "form-control form-control-ar"
                  : "form-control"
              }
            >
              <label htmlFor="referal code">{t("referralCode")}</label>
              <input
                type="text"
                id="referal code"
                className="input-control"
                onChange={(e) =>
                  setUser({
                    ...user,
                    referralCode: e.target.value,
                  })
                }
              />
            </div>
            <div className={locale === "ar" ? "forgot forgot-ar" : "forgot"}>
              <div
                className={
                  locale === "ar" ? "remember-me remember-me-ar" : "remember-me"
                }
              >
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">
                  {t("acceptTerms")} <span className="terms">{t("terms")}</span>
                </label>
              </div>
            </div>
            <div className="or">
              <Image src={loginLine} alt="login line" width={150} height={10} />
              <p className="or-text">{t("orSignUp")}</p>
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
              {isLoading ? <Loader /> : t("signUpBtn")}
            </button>
            <p className="dont-have-account">
              {t("signUpHave")}{" "}
              <span
                className="go-to-register hover"
                onClick={() => {
                  router.push("/login");
                }}
              >
                {t("signUpLogin")}
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

export default RegisterPage;
