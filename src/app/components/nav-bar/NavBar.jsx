"use client";
import Logo from "@/atoms/logo/Logo";
import Links from "../link/Links";
import "./NavBar.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const locale = useLocale();
  const t = useTranslations("Index");
  const router = useRouter();
  return (
    <nav className={locale === "ar" ? "nav-bar-reversed" : ""}>
      <Logo Click="nav-logo" />
      <ul className={locale === "ar" ? "links reversed" : "links"}>
        <Links link="/" text={t("home")} />
        <Links link="/#about" text={t("about")} />
        <Links link="/#welcome" text={t("welcome")} />
        <Links link="/#features" text={t("features")} />
      </ul>
      <div className="nav-btns">
        <button
          className="outline log"
          onClick={() => {
            router.push("/login");
          }}
        >
          {t("login")}
        </button>
        <button
          className="inline log"
          onClick={() => {
            router.push("/register");
          }}
        >
          {t("signUp")}
        </button>
        <button className="inline dow">{t("download")}</button>
      </div>
    </nav>
  );
};

export default NavBar;
