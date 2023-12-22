import React from "react";
import Links from "../link/Links";
import { FaTimes } from "react-icons/fa";
import Logo from "@/atoms/logo/Logo";
import "./NavBar.css";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const SideBar = ({ isSidebarOpen, setIsSideBarOpen }) => {
  const locale = useLocale();
  const t = useTranslations("Index");
  const router = useRouter();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <Logo Click="nav-logo" />
        <button className="close-btn" onClick={() => setIsSideBarOpen(false)}>
          <FaTimes />
        </button>
      </div>
      <ul className={locale === "ar" ? "aside-links reversed" : "aside-links"}>
        <Links link="/" text={t("home")} setIsSideBarOpen={setIsSideBarOpen}/>
        <Links link="/#about" text={t("about")} setIsSideBarOpen={setIsSideBarOpen}/>
        <Links link="/#welcome" text={t("welcome")} setIsSideBarOpen={setIsSideBarOpen}/>
        <Links link="/#features" text={t("features")} setIsSideBarOpen={setIsSideBarOpen}/>
      </ul>
      <div className="dow-container">
        <button className="aside-dow">{t("download")}</button>
      </div>
    </aside>
  );
};

export default SideBar;
