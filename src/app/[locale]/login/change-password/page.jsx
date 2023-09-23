"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../login.css";
import Image from "next/image";
import { useState } from "react";
import "./change-password.css";
import checkCircle from "./check-circle.svg";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const [succes, setSucces] = useState(false);
  const router = useRouter();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-form">
        {!succes ? (
          <div className="login-form">
            <h1 className="title">Reset Password</h1>
            <p className="welcome">Choose a new password for your account</p>

            <form>
              <div className="form-control">
                <label htmlFor="phone-number">Your new password</label>
                <input
                  type="password"
                  id="phone-number"
                  className="input-control"
                />
              </div>
              <div className="form-control">
                <label htmlFor="phone-number">Confirm your new password</label>
                <input
                  type="password"
                  id="phone-number"
                  className="input-control"
                />
              </div>
              <button className="form-control-btn hover" type="submit">
                Send
              </button>
            </form>
          </div>
        ) : (
          <div className="succes">
            <span className="succes-container">
              <Image
                src={checkCircle}
                alt="check circle"
                width={100}
                height={100}
              />
            </span>
            <h1 className="title">Password reset successfully</h1>
            <button
              className="form-control-btn hover succes-btn"
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </button>
          </div>
        )}
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

export default ChangePassword;
