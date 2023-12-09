"use client";
import "./PostReview.css";
import "../search-input/SearchInput.css";
import { BsFillSendFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Loader from "../loader/Loader";
import axiosInstance from "@/utils/utils";
import { baseUrl } from "@/utils/constants";

const PostReview = ({ canReviewCourse, courseId, teacher, teacherId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
  };
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canReviewCourse) {
      toast.error("You can't review this course");
      return;
    }
    try {
      setIsLoading(true);
      const response = await axiosInstance.post(
        `${baseUrl}/course/review/store`,
        {
          course_id: courseId,
          content: comment,
          stars: rating,
        },
      );
      console.log(response);
      setIsLoading(false);
      toast.success("Comment added successfully");
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong");
    }
  };

  // handle submit teacher review
  const handleSubmitTeacherReview = async (e) => {
    e.preventDefault();
    // if (!canReviewCourse) {
    //   toast.error("You can't review this course");
    //   return;
    // }
    try {
      setIsLoading(true);
      const response = await axiosInstance.post(
        `${baseUrl}/student/teacher/review/store`,
        {
          teacher_id: teacherId,
          content: comment,
          stars: rating,
        },
      );
      console.log(response);
      setIsLoading(false);
      toast.success("Comment added successfully");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <section className="post-review">
      <ToastContainer />
      <div className="stars">
        <Rating onClick={handleRating} />
      </div>
      <form
        className="search-input"
        onSubmit={teacher ? handleSubmitTeacherReview : handleSubmit}
      >
        <input
          type="text"
          placeholder="Your comment here..."
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="search-icon">
          <button type="submit" className="send hover">
            {isLoading ? <Loader /> : <BsFillSendFill size={20} color="#fff" />}
          </button>
        </div>
      </form>
    </section>
  );
};

export default PostReview;
