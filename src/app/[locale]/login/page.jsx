"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "./login.css";
import Image from "next/image";
import loginLine from "./login-line.svg";

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
              <p className="forgot-password hover">Forgot password?</p>
            </div>
            <div className="or">
              <Image src={loginLine} alt="login line" width={150} height={10} />
              <p className="or-text">Or login with</p>
              <Image src={loginLine} alt="login line" width={150} height={10} />
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
