"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../login.css";
import Image from "next/image";
import "./reset-password.css";
import { useLocale, useTranslations } from "next-intl";
import useAuthContext from "@/hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/app/components/loader/Loader";

const SendCodePage = () => {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const { user, setUser, isLoading, handleForgotPassword } = useAuthContext();
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
          <h1 className="title">{t("resetPassword")}</h1>
          <form onSubmit={handleForgotPassword}>
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
            <button className="form-control-btn hover reset" type="submit">
              {isLoading ? <Loader /> : t("sendCode")}
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

export default SendCodePage;
