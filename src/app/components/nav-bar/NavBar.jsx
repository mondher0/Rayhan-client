import Logo from "@/atoms/logo/Logo";
import Links from "../link/Links";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Logo Click="nav-logo" />
      <ul className="links">
        <Links link="/" text="Home" />
        <Links link="#" text="About us" />
        <Links link="#" text="Welcome" />
        <Links link="#" text="Features" />
      </ul>
      <div className="nav-btns">
        <button className="outline">login</button>
        <button className="inline">sign up</button>
      </div>
    </nav>
  );
};

export default NavBar;
