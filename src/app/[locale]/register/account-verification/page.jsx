"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../../login/login.css";
import Image from "next/image";
import "../../login/enter-code/enter-code.css";
import { useLocale, useTranslations } from "next-intl";
import useAuthContext from "@/hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/app/components/loader/Loader";

const AccoutVerificationPage = () => {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const { user, confirmPhoneNumber, isLoading } = useAuthContext();
  console.log("--------------user from account verification", user);
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
          <h1 className="title title-reset">{t("accountVerify")}</h1>
          <form onSubmit={confirmPhoneNumber}>
            <div
              className={locale === "ar" ? "set-code set-code-ar" : "set-code"}
            >
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <button className="form-control-btn hover resend" type="submit">
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

export default AccoutVerificationPage;
