"use client";
import { useRouter } from "next/navigation";
import logo from "./logo.svg";
import Image from "next/image";
import "./Logo.css";

const Logo = ({ Click }) => {
  const router = useRouter();
  console.log(logo);
  return (
    <Image
      className="logo"
      src={logo}
      alt="Logo"
      width={128}
      onClick={() => {
        if (Click === "nav-logo") {
          router.push("/");
        }
      }}
    />
  );
};

export default Logo;
