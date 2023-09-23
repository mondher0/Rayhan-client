"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../login.css";
import Image from "next/image";
import "./reset-password.css";

const SendCodePage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-form">
        <div className="login-form">
          <h1 className="title">Reset password</h1>
          <form>
            <div className="form-control">
              <label htmlFor="phone-number">Phone number</label>
              <input type="tel" id="phone-number" className="input-control" />
            </div>
            <button className="form-control-btn hover reset" type="submit">
              Send code
            </button>
          </form>
        </div>
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

export default SendCodePage;
