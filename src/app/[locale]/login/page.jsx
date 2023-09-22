"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "./login.css";
import Image from "next/image";

const page = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-form">
        <div className="login-form">
          <p className="welcome">Welcome back</p>
          <h1 className="title">Login to your account</h1>
          <form>
            <div className="form-control">
              <label htmlFor="phone-number">Phone number</label>
              <input type="tel" id="phone-number" className="input-control" />
            </div>
            <div className="form-control">
              <label htmlFor="phone-number">Password</label>
              <input
                type="password"
                id="phone-number"
                className="input-control"
              />
            </div>
            <div className="forgot">
              <div className="remember-me">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <p className="forgot-password">Forgot password?</p>
            </div>
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

export default page;
