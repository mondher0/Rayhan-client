"use client";
import { baseUrl } from "@/utils/constants";
import axiosInstance from "@/utils/utils";
import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // submit quiz
  const submitQuiz = async (lessonId) => {
    setIsLoading(true);
    console.log(questions);
    const transformedData = questions.reduce(
      (result, { question_id, answers }) => {
        const existingIndex = result.findIndex(
          (item) => item.question_id === question_id
        );

        if (existingIndex !== -1) {
          // Question already exists in the result array, update its answers
          result[existingIndex].answers.push(
            ...answers.map(({ id }) => ({ id }))
          );
        } else {
          // Question does not exist, add a new object
          result.push({
            question_id,
            answers: answers.map(({ id }) => ({ id })),
          });
        }

        return result;
      },
      []
    );
    console.log(transformedData);
    try {
      const data = {
        lesson_id: lessonId,
        questions: transformedData,
      };
      console.log(data);
      const response = await axiosInstance.post(
        `${baseUrl}/course/lesson/pass/quiz`,
        {
          lesson_id: lessonId,
          questions: transformedData,
        }
      );
      console.log(response);
      setIsLoading(false);
      setSuccess(true);
    } catch (error) {
      setIsLoading(false);
      setSuccess(false);
      console.log(error);
      toast.error("Something went wrong");
    }
    console.log(transformedData);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        submitQuiz,
        isLoading,
        success,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
export default QuizProvider;
