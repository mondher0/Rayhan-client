"use client";
import NavBar from "@/app/components/nav-bar/NavBar";
import "../../login/login.css";
import Image from "next/image";
import LearningProcces from "@/app/components/learning-procces/LearningProcces";
import { useState } from "react";
import LevelStudy from "@/app/components/level-study/LevelStudy";
import StudyYear from "@/app/components/study-year/StudyYear";

const RegisterProcces = () => {
  const [RegisterProccesState, setRegisterProccesState] =
    useState("learning-procces");
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-form">
        <div className="login-form">
          <h1 className="title">You are now part of the team!</h1>
          {RegisterProccesState === "learning-procces" ? (
            <LearningProcces
              setRegisterProccesState={setRegisterProccesState}
            />
          ) : RegisterProccesState === "level-study" ? (
            <LevelStudy setRegisterProccesState={setRegisterProccesState} />
          ) : RegisterProccesState === "study-year" ? (
            <StudyYear />
          ) : null}
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

export default RegisterProcces;
