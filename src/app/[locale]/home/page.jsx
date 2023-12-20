import { baseUrl } from "@/utils/constants";
import Home from "./Home";
import { getToken } from "@/utils/lib";

const HomePage = async () => {
  // get courses from server
  const getCourses = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${baseUrl}/course/get`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const courses = await response.json();
      console.log(
        "----------------------response from home page----------------------",
        courses,
      );
      return courses.data.data;
    } catch (error) {
      console.log(
        "----------------------from home page----------------------",
        error,
      );
      throw new Error(error);
    }
  };

  // get teachers from server
  const getTeachers = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${baseUrl}/student/teacher/get`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const teachers = await response.json();
      console.log("------------response from home page-----------", teachers);
      return teachers.data;
    } catch (error) {
      console.log(
        "--------------------error from home page-------------------",
        error,
      );
      throw new Error(error);
    }
  };

  // get continue courses from server
  const getContinueCourses = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${baseUrl}/course/get/my-courses`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const courses = await response.json();
      console.log(
        "----------------------response from home page continue courses----------------------",
        courses,
      );
      return courses.data.data;
    } catch (error) {
      console.log(
        "----------------------from home page----------------------",
        error,
      );
      throw new Error(error);
    }
  };

  const coursesData = getCourses();
  const teachersData = getTeachers();
  const continueCoursesData = getContinueCourses();
  const [courses, teachers, continueCourses] = await Promise.all([
    coursesData,
    teachersData,
    continueCoursesData,
  ]);

  console.log("continueCourses", continueCourses);

  return (
    <Home
      courses={courses}
      teachers={teachers}
      continueCourses={continueCourses}
    />
  );
};

export default HomePage;
