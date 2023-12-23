"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../login.css";
import Image from "next/image";
import { useState } from "react";
import "./change-password.css";
import checkCircle from "./check-circle.svg";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { ToastContainer } from "react-toastify";
import useAuthContext from "@/hooks/useAuthContext";
import Loader from "@/app/components/loader/Loader";

const ChangePassword = () => {
  const { user, setUser, resetPassword, isLoading, succes } = useAuthContext();
  const router = useRouter();
  const t = useTranslations("Auth");
  const locale = useLocale();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-form">
        {!succes ? (
          <div
            className={
              locale === "ar" ? "login-form login-form-ar" : "login-form"
            }
          >
            <h1 className="title">{t("resetPassword")}</h1>
            <p className="welcome">{t("chooseNewPassword")}</p>

            <form onSubmit={resetPassword}>
              <div
                className={
                  locale === "ar"
                    ? "form-control form-control-ar"
                    : "form-control"
                }
              >
                <ToastContainer />
                <label htmlFor="phone-number">{t("urNewPassword")}</label>
                <input
                  type="password"
                  id="phone-number"
                  className="input-control"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
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
                <label htmlFor="phone-number">{t("confirmNewPassword")}</label>
                <input
                  type="password"
                  id="phone-number"
                  className="input-control"
                  onChange={(e) => {
                    setUser({ ...user, password_confirmation: e.target.value });
                  }}
                />
              </div>
              <button className="form-control-btn hover" type="submit">
                {isLoading ? <Loader /> : t("send")}
              </button>
            </form>
          </div>
        ) : (
          <div className="succes">
            <span className="succes-container">
              <Image
                src={checkCircle}
                alt="check circle"
                width={100}
                height={100}
              />
            </span>
            <h1 className="title">{t("success")}</h1>
            <button
              className="form-control-btn hover succes-btn"
              onClick={() => {
                router.push("/login");
              }}
            >
              {t("loginBtn")}
            </button>
          </div>
        )}
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

export default ChangePassword;
