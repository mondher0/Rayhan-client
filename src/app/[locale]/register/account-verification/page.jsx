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
import { useRef } from "react";

const AccoutVerificationPage = () => {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const firstCodeRef = useRef(null);
  const secondCodeRef = useRef(null);
  const thirdCodeRef = useRef(null);
  const fourthCodeRef = useRef(null);
  const fifthCodeRef = useRef(null);

  const handleCodeChange = (currentCode, nextCodeRef) => {
    if (currentCode.length === 1) {
      nextCodeRef.current.focus();
    }
  };
  const {
    user,
    setUser,
    confirmPhoneNumber,
    isLoading,
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
  } = useAuthContext();
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setUser({
                ...user,
                code:
                  firstCode + secondCode + thirdCode + fourthCode + fifthCode,
              });
              confirmPhoneNumber();
            }}
          >
            <div
              className={locale === "ar" ? "set-code set-code-ar" : "set-code"}
            >
              <input
                type="text"
                onChange={(e) => {
                  setFirstCode(e.target.value);
                  handleCodeChange(e.target.value, secondCodeRef);
                }}
                value={firstCode}
                ref={firstCodeRef}
              />
              <input
                type="text"
                onChange={(e) => {
                  setSecondCode(e.target.value);
                  handleCodeChange(e.target.value, thirdCodeRef);
                }}
                value={secondCode}
                ref={secondCodeRef}
              />
              <input
                type="text"
                onChange={(e) => {
                  setThirdCode(e.target.value);
                  handleCodeChange(e.target.value, fourthCodeRef);
                }}
                value={thirdCode}
                ref={thirdCodeRef}
              />
              <input
                type="text"
                onChange={(e) => {
                  setFourthCode(e.target.value);
                  handleCodeChange(e.target.value, fifthCodeRef);
                }}
                value={fourthCode}
                ref={fourthCodeRef}
              />
              <input
                type="text"
                onChange={(e) => {
                  setFifthCode(e.target.value);
                }}
                value={fifthCode}
                ref={fifthCodeRef}
              />
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

export default AccoutVerificationPage;
