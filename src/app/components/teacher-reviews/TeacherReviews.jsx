"use client";
import TeacherReviewCard from "../teacher-review-card/TeacherReviewCard";
import "./TeacherReviews.css";
const TeacherReviews = ({ reviews }) => {
  console.log("-----------------reviews-----------------", reviews);
  if (!reviews.data) {
    return (
      <section className="teacher-reviews">
        {reviews?.map((review) => (
          <TeacherReviewCard key={review.id} review={review} />
        ))}
      </section>
    );
  }
  return (
    <section className="teacher-reviews">
      {reviews?.data?.map((review) => (
        <TeacherReviewCard key={review.id} review={review} />
      ))}
    </section>
  );
};

export default TeacherReviews;
