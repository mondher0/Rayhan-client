import TeacherReviewCard from "../teacher-review-card/TeacherReviewCard";
import "./TeacherReviews.css";
const TeacherReviews = ({ reviews }) => {
  return (
    <section className="teacher-reviews">
      {reviews?.data?.map((review) => (
        <TeacherReviewCard key={review.id} review={review} />
      ))}
    </section>
  );
};

export default TeacherReviews;
