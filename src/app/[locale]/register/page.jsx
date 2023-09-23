"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../login/login.css";
import Image from "next/image";
import loginLine from "../login/login-line.svg";
import LoginWithGoogle from "@/atoms/login-with-google/LoginWithGoogle";
import LoginWithIos from "@/atoms/login-with-ios/LoginWithIos";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-form">
        <div className="login-form">
          <h1 className="title">welcome, Sign up</h1>
          <form>
            <div className="input-container">
              <div className="form-half-control">
                <label htmlFor="first-name">first name</label>
                <input type="text" id="first-name" className="input-control" />
              </div>
              <div className="form-half-control">
                <label htmlFor="last-name">last name</label>
                <input type="text" id="last-name" className="input-control" />
              </div>
            </div>
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
            <div className="form-control">
              <label htmlFor="referal code">referal code(optional)</label>
              <input
                type="number"
                id="referal code"
                className="input-control"
              />
            </div>
            <div className="forgot">
              <div className="remember-me">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">
                  By Creating account, you are accepting{" "}
                  <span className="terms">terms & conditions</span>
                </label>
              </div>
            </div>
            <div className="or">
              <Image src={loginLine} alt="login line" width={150} height={10} />
              <p className="or-text">Or sign up with</p>
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
              Sign up
            </button>
            <p className="dont-have-account">
              You have an account?{" "}
              <span
                className="go-to-register hover"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Login
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

export default RegisterPage;
