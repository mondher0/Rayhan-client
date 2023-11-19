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
      const response = await fetch(
        `${baseUrl}/course/get/${id}/reviews?paginate=false`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

  const courseData = getCourseDetails();
  const reviewsData = getCourseReviews();

  const [course, reviews] = await Promise.all([courseData, reviewsData]);
  console.log("------------course from course details page-----------", course);
  console.log(
    "------------reviews from course details page-----------",
    reviews
  );
  return <SingleCourse course={course} reviews={reviews} courseId={id} />;
};

export default CourseDetailsPage;
