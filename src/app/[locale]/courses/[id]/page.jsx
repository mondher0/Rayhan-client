import { getToken } from "@/utils/lib";
import SingleCourse from "./SingleCourse";
import { baseUrl } from "@/utils/constants";

const CourseDetailsPage = async ({ params }) => {
  const { id } = params;

  // get course details from server
  const getCourseDetails = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${baseUrl}/course/get/${id}`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const course = await response.json();
      console.log(
        "----------------------response from course details page----------------------",
        course
      );
      return course.data;
    } catch (error) {
      console.log(
        "----------------------from course details page----------------------",
        error
      );
      throw new Error(error);
    }
  };

  // get course reviews from server
  const getCourseReviews = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${baseUrl}/course/get/${id}/reviews`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const reviews = await response.json();
      console.log(
        "----------------------response from course reviews page----------------------",
        reviews
      );
      return reviews.data;
    } catch (error) {
      console.log(
        "----------------------from course reviews page----------------------",
        error
      );
      throw new Error(error);
    }
  };

  // get enrollment data
  const getEnrollmentData = async () => {
    try {
      const token = getToken();
      const response = await fetch(
        `${baseUrl}/enrollment/get?status=inactive`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const enrollment = await response.json();
      console.log(
        "---------------from enrollment--------------------------",
        enrollment
      );
      return enrollment.data;
    } catch (error) {
      console.log(
        "----------------------from enrollment -------------------------",
        error
      );
      throw new Error(error);
    }
  };

  const courseData = getCourseDetails();
  const reviewsData = getCourseReviews();
  const enrollmentData = getEnrollmentData();

  const [course, reviews, enrollment] = await Promise.all([
    courseData,
    reviewsData,
    enrollmentData,
  ]);
  console.log("------------course from course details page-----------", course);
  console.log(
    "------------reviews from course details page-----------",
    reviews
  );
  console.log(
    "------------enrollment from course details page second-----------",
    enrollment
  );
  return (
    <SingleCourse
      course={course}
      reviews={reviews}
      courseId={id}
      enrollment={enrollment}
    />
  );
};

export default CourseDetailsPage;
