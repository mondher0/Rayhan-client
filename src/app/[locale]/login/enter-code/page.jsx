"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../login.css";
import Image from "next/image";
import "./enter-code.css";

const SetCodePage = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-form">
        <div className="login-form">
          <h1 className="title">Reset password</h1>
          <form>
            <div className="set-code">
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <button className="form-control-btn hover resend" type="submit">
                Resend code
              </button>
            </div>
            <button className="form-control-btn hover reset" type="submit">
              Verify
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

export default SetCodePage;
