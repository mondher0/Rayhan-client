import Logo from "@/atoms/logo/Logo";
import Links from "../link/Links";
import "./NavBar.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const NavBar = () => {
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <nav className={locale === "ar" ? "nav-bar-reversed" : ""}>
      <Logo Click="nav-logo" />
      <ul className={locale === "ar" ? "links reversed" : "links"}>
        <Links link="#" text={t("home")} />
        <Links link="#" text={t("about")} />
        <Links link="#" text={t("welcome")} />
        <Links link="#features" text={t("features")} />
      </ul>
      <div className="nav-btns">
        <button className="outline">{t("login")}</button>
        <button className="inline">{t("signUp")}</button>
      </div>
    </nav>
  );
};

export default NavBar;
