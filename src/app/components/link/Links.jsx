"use client";
import "./Links.css";

const Links = ({ link, text, setIsSideBarOpen }) => {
  return (
    <li
      className="single-link"
      onClick={() => {
        if (setIsSideBarOpen) {
          setIsSideBarOpen(false);
        }
      }}
    >
      <a href={link}>
        <span>{text}</span>
      </a>
    </li>
  );
};

export default Links;
