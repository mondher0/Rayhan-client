"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../login.css";
import Image from "next/image";
import { useState } from "react";
import "./change-password.css";
import checkCircle from "./check-circle.svg";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const ChangePassword = () => {
  const [succes, setSucces] = useState(false);
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

            <form>
              <div
                className={
                  locale === "ar"
                    ? "form-control form-control-ar"
                    : "form-control"
                }
              >
                <label htmlFor="phone-number">{t("urNewPassword")}</label>
                <input
                  type="password"
                  id="phone-number"
                  className="input-control"
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
                />
              </div>
              <button className="form-control-btn hover" type="submit">
                {t("send")}
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
