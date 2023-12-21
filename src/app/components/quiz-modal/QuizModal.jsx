import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./quiz-modal.css";
import next from "./next.svg";
import prev from "./previous.svg";
import Image from "next/image";
import useQuizContext from "@/hooks/useQuizContext";
import Loader from "../loader/Loader";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const QuizModal = ({ open, onClose, courseId, lessonId, content }) => {
  if (!content) return null;
  const {
    questions,
    setQuestions,
    submitQuiz,
    isLoading,
    success,
    percentage,
    setSuccess,
  } = useQuizContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < content.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = content[currentQuestionIndex] || {};
  console.log(content);

  return (
    <Popup open={open} onClose={onClose} position="right center" modal>
      <div className="modal-title">Quiz</div>
      {success ? (
        <div className="circel-progress">
          <p className="success">Your score is</p>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          {percentage < 80 ? (
            <div className="results">
              <p className="faild">
                You can only go to the next lesson only if you finish 80% of the
                previous lesson
              </p>
              <button
                className="btn hover"
                onClick={() => {
                  setSuccess(false);
                  onClose();
                  setCurrentQuestionIndex(0);
                }}
              >
                Understood
              </button>
            </div>
          ) : (
            <button className="btn hover" onClick={onClose}>
              Next lesson
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="question-header">
            <div className="question-number">
              Question:{" "}
              <span style={{ color: "#243752" }}>
                {currentQuestionIndex + 1}
              </span>
            </div>
          </div>
          <div className="question-body">
            <p className="question-title">{currentQuestion.title}</p>
            <div className="questions">
              {currentQuestion.type === "MCQ"
                ? currentQuestion.answers.map((answer, index) => (
                    <div key={index} className="single-question">
                      <input
                        type="checkbox"
                        name={`question${currentQuestionIndex}-answer${index}`}
                        id={`question${currentQuestionIndex}-answer${index}`}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setQuestions([
                              ...questions,
                              {
                                question_id: currentQuestion.id,
                                answers: [{ id: answer.id }],
                              },
                            ]);
                          } else {
                            setQuestions(
                              questions.filter(
                                (question) =>
                                  question.answers[0].id !== answer.id,
                              ),
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={`question${currentQuestionIndex}-answer${index}`}
                      >
                        {answer.title}
                      </label>
                    </div>
                  ))
                : currentQuestion.type === "SCQ"
                ? currentQuestion.answers.map((answer, index) => (
                    <div key={index} className="single-question">
                      <input
                        type="radio"
                        name="question"
                        id={`question${currentQuestionIndex}-answer${index}`}
                        onChange={() => {
                          setQuestions((prevQuestions) => {
                            const questionExists = prevQuestions.some(
                              (question) =>
                                question.question_id === currentQuestion.id,
                            );

                            if (questionExists) {
                              return prevQuestions.map((question) => {
                                if (
                                  question.question_id === currentQuestion.id
                                ) {
                                  return {
                                    question_id: currentQuestion.id,
                                    answers: [{ id: answer.id }],
                                  };
                                }
                                return question;
                              });
                            } else {
                              return [
                                ...prevQuestions,
                                {
                                  question_id: currentQuestion.id,
                                  answers: [{ id: answer.id }],
                                },
                              ];
                            }
                          });
                        }}
                      />
                      <label
                        htmlFor={`question${currentQuestionIndex}-answer${index}`}
                      >
                        {answer.title}
                      </label>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </>
      )}

      {success ? null : (
        <div className="question-footer">
          <div className="hover" onClick={goToPreviousQuestion}>
            <Image
              src={prev}
              alt="prev"
              width={40}
              height={40}
              className="prev"
            />
          </div>
          {currentQuestionIndex === content.length - 1 ? (
            <button
              className="btn hover"
              onClick={() => {
                submitQuiz(lessonId);
              }}
            >
              {isLoading ? <Loader /> : "Submit"}
            </button>
          ) : null}
          <div className="hover" onClick={goToNextQuestion}>
            <Image
              src={next}
              alt="next"
              width={40}
              height={40}
              className="next"
            />
          </div>
        </div>
      )}
    </Popup>
  );
};

export default QuizModal;
