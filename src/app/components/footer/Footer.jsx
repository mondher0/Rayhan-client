import Logo from "@/atoms/logo/Logo";
import "./Footer.css";
import Links from "../link/Links";
import footerPlayStore from "./footer-play-store.svg";
import footerAppStore from "./footer-app-store.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="container footer">
      <div className="footer-text">
        <Logo />
        <p className="footer-desc">
          Our motto to fulfill customer demand by making them satisfied with
          making their education better.
        </p>
      </div>
      <div className="footer-links">
        <span className="span">About</span>
        <ul>
          <Links link="#" text="Home" />
          <Links link="#about" text="About" />
          <Links link="#welcome" text="Welcome" />
          <Links link="#features" text="Features" />
        </ul>
      </div>
      <div className="footer-support">
        <span className="span">Support</span>
        <ul>
          <Links link="#" text="Account" />
          <Links link="#" text="Support Center" />
          <Links link="#" text="Feedback" />
          <Links link="#" text="Contact Us" />
        </ul>
      </div>
      <div className="get-our-app">
        <span className="span">Get Our App</span>
        <Image src={footerPlayStore} alt="play store" width={200} height={60} className="hover" />
        <Image src={footerAppStore} alt="app store" width={200} height={60} className="hover" />
      </div>
    </footer>
  );
};

export default Footer;
