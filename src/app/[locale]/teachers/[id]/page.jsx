import { baseUrl } from "@/utils/constants";
import { getToken } from "@/utils/lib";
import SingleTeacher from "./SingleTeacher";

const TeacherDetailsPage = async ({ params, searchParams }) => {
  const { id } = params;
  const { page } = searchParams;

  // get teacher from the server
  const getTeacher = async () => {
    try {
      const token = getToken();
      console.log(id);
      const response = await fetch(`${baseUrl}/student/teacher/get/${id}`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const teacher = await response.json();
      console.log(
        "------------response from teacher details page-----------",
        teacher,
      );
      return teacher.data;
    } catch (error) {
      console.log(
        "--------------------error from teacher details page-------------------",
        error,
      );
      throw new Error(error);
    }
  };

  // get teacher courses from the server
  const getCourses = async () => {
    try {
      const token = getToken();
      const response = await fetch(
        `${baseUrl}/course/get/teacher/${id}?paginate=true&page=${page}`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const courses = await response.json();
      console.log(
        "------------response from teacher details page-----------",
        courses,
      );
      return courses.data;
    } catch (error) {
      console.log(
        "--------------------error from teacher details page-------------------",
        error,
      );
      throw new Error(error);
    }
  };

  // get teacher reviews from the server
  const getTeacherReviews = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${baseUrl}/student/teacher/${id}/reviews`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const reviews = await response.json();
      console.log(
        "------------response from teacher reviews page-----------",
        reviews,
      );
      return reviews.data;
    } catch (error) {
      console.log(
        "--------------------error from teacher reviews page-------------------",
        error,
      );
      throw new Error(error);
    }
  };
  const teacherData = getTeacher();
  const coursesData = getCourses();
  const reviewsData = getTeacherReviews();

  const [teacher, courses, reviews] = await Promise.all([
    teacherData,
    coursesData,
    reviewsData,
  ]);
  console.log("teacherData", teacher);
  console.log("coursesData", courses);
  console.log("reviewsData", reviews);
  return (
    <SingleTeacher
      teacher={teacher}
      page={page}
      courses={courses.data}
      reviews={reviews}
      totalPage={courses.meta.last_page}
    />
  );
};

export default TeacherDetailsPage;
