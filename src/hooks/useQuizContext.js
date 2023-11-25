"use client";
import { QuizContext } from "@/context/quiz-context";
import { useContext } from "react";
const useQuizContext = () => {
  return useContext(QuizContext);
};
export default useQuizContext;
