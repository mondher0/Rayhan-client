"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../login.css";
import Image from "next/image";
import "./reset-password.css";
import { useLocale, useTranslations } from "next-intl";

const SendCodePage = () => {
  const t = useTranslations("Auth");
  const locale = useLocale();
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
          <h1 className="title">{t("resetPassword")}</h1>
          <form>
            <div
              className={
                locale === "ar"
                  ? "form-control form-control-ar"
                  : "form-control"
              }
            >
              <label htmlFor="phone-number">{t("loginPhoneNumber")}</label>
              <input type="tel" id="phone-number" className="input-control" />
            </div>
            <button className="form-control-btn hover reset" type="submit">
              {t("sendCode")}
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
