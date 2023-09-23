"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../../login/login.css";
import Image from "next/image";
import "../../login/enter-code/enter-code.css";
import { useLocale, useTranslations } from "next-intl";

const AccoutVerificationPage = () => {
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
          <h1 className="title title-reset">{t("accountVerify")}</h1>
          <form>
            <div
              className={locale === "ar" ? "set-code set-code-ar" : "set-code"}
            >
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <button className="form-control-btn hover resend" type="submit">
                {t("resendCode")}
              </button>
            </div>
            <button className="form-control-btn hover reset" type="submit">
              {t("verifyCode")}
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

export default AccoutVerificationPage;
