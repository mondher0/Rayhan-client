import { baseUrl } from "@/utils/constants";
import Courses from "./Courses";
import { getToken } from "@/utils/lib";

const CoursesPage = async ({ searchParams }) => {
  const { page } = searchParams;

  // get courses from server
  const getCourses = async () => {
    try {
      const token = getToken();
      const response = await fetch(
        `${baseUrl}/course/get?paginate=true&page=${page}`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const courses = await response.json();
      console.log(
        "----------------------response from courses page----------------------",
        courses
      );
      return courses.data;
    } catch (error) {
      console.log(
        "----------------------from courses page----------------------",
        error
      );
      throw new Error(error);
    }
  };
  const courses = await getCourses();
  console.log("------------courses from courses page-----------", courses);
  return (
    <Courses
      currentPage={page}
      courses={courses.data}
      totalPage={courses.meta.from}
    />
  );
};

export default CoursesPage;
