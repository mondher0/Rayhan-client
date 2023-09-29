"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Links from "../link/Links";
import Logo from "@/atoms/logo/Logo";
import "../nav-bar/NavBar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import avatar from "./avatar.svg";
import Image from "next/image";
import "./LoginNavBar.css";
import Notifications from "../notifications/Notifications";
import { useState } from "react";

const LoginNavBar = () => {
  const locale = useLocale();
  const t = useTranslations("Index");
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <nav className={locale === "ar" ? "nav-bar-reversed" : ""}>
      <Logo Click="nav-logo" />
      <ul className={locale === "ar" ? "links reversed" : "links"}>
        <Links link="/home" text={t("home")} />
        <Links link="/subjects?page=1" text={t("subjects")} />
        <Links link="/courses?page=1" text={t("courses")} />
        <Links link="/teachers?page=1" text={t("teachers")} />
        <Links link="/offers?page=1" text={t("offers")} />
      </ul>
      <div
        className={
          locale === "ar"
            ? "nav-btns login-nav nav-reversed"
            : "nav-btns login-nav"
        }
      >
        <IoIosNotificationsOutline
          size={30}
          color="#838E9E"
          className="hover"
          onClick={() => {
            setShowNotifications(!showNotifications);
          }}
        />
        <div className="divider"></div>
        <div
          className="avatar hover"
          onClick={() => {
            router.push("/profile");
          }}
        >
          <Image src={avatar} alt="avatar" width={50} height={50} />
        </div>
        <FiLogOut size={30} color="#838E9E" className="hover" />
        {showNotifications && <Notifications />}
      </div>
    </nav>
  );
};

export default LoginNavBar;
