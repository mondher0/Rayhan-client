import TeacherReviewCard from "../teacher-review-card/TeacherReviewCard";
import "./TeacherReviews.css";
const TeacherReviews = () => {
  return (
    <section className="teacher-reviews">
      <TeacherReviewCard />
      <TeacherReviewCard />
      <TeacherReviewCard />
    </section>
  );
};

export default TeacherReviews;
