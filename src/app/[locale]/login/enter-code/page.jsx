"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../login.css";
import Image from "next/image";
import "./enter-code.css";
import { useLocale, useTranslations } from "next-intl";
import useAuthContext from "@/hooks/useAuthContext";
import Loader from "@/app/components/loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SetCodePage = () => {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const {
    firstCode,
    setFirstCode,
    secondCode,
    setSecondCode,
    thirdCode,
    setThirdCode,
    fourthCode,
    setFourthCode,
    fifthCode,
    setFifthCode,
    checkCode,
    isLoading,
  } = useAuthContext();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-form">
        <div
          className={
            locale === "ar" ? "login-form login-form-ar" : "login-form"
          }
        >
          <ToastContainer />
          <h1 className="title title-reset">{t("resetPassword")}</h1>
          <form onSubmit={checkCode}>
            <div
              className={locale === "ar" ? "set-code set-code-ar" : "set-code"}
            >
              <input type="number" value={firstCode} />
              <input type="number" value={secondCode} />
              <input type="number" value={thirdCode} />
              <input type="number" value={fourthCode} />
              <input type="number" value={fifthCode} />
              <button className="form-control-btn hover resend" type="button">
                {t("resendCode")}
              </button>
            </div>
            <button className="form-control-btn hover reset" type="submit">
              {isLoading ? <Loader /> : t("verifyCode")}
            </button>
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

export default SetCodePage;
