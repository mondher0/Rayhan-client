"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "./login.css";
import Image from "next/image";
import loginLine from "./login-line.svg";
import LoginWithGoogle from "@/atoms/login-with-google/LoginWithGoogle";
import LoginWithIos from "@/atoms/login-with-ios/LoginWithIos";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
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
              <p
                className="forgot-password hover"
                onClick={() => {
                  router.push("/login/reset-password");
                }}
              >
                Forgot password?
              </p>
            </div>
            <div className="or">
              <Image src={loginLine} alt="login line" width={150} height={10} />
              <p className="or-text">Or login with</p>
              <Image src={loginLine} alt="login line" width={150} height={10} />
            </div>
            <div className="login-with">
              <div className="login-with-google hover">
                <LoginWithGoogle />
              </div>
              <div className="login-with-ios hover">
                <LoginWithIos />
              </div>
            </div>
            <button className="form-control-btn hover" type="submit">
              Login now
            </button>
            <p className="dont-have-account">
              are you new here ?{" "}
              <span
                className="go-to-register hover"
                onClick={() => {
                  router.push("/register");
                }}
              >
                Sign up
              </span>
            </p>
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

export default LoginPage;