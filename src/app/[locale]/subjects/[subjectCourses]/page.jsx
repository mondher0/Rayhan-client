import { getToken } from "@/utils/lib";
import "../subjects.css";
import SubjectCourses from "./SubjectCourses";
import { baseUrl } from "@/utils/constants";

const SubjectCoursespage = async ({ searchParams, params }) => {
  const { page } = searchParams;
  const { subject } = searchParams;
  console.log("subject from subjectCourses page mondher", subject);
  const { subjectCourses } = params;

  // get courses
  const getCourses = async () => {
    try {
      const token = getToken();
      const response = await fetch(
        `${baseUrl}/course/get/category/${subjectCourses}?paginate=true&page=${page}`,
        {
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const courses = await response.json();
      console.log(
        "-----------------from SubjectCoursespage--------------------",
        courses
      );
      return courses.data;
    } catch (error) {
      console.log(
        "-----------------from SubjectCoursespage--------------------",
        error
      );
      throw new Error(error);
    }
  };
  const courses = await getCourses();
  console.log(
    "-----------------from SubjectCoursespage--------------------",
    courses
  );
  return (
    <SubjectCourses
      subjectCourses={subjectCourses}
      currentPage={page}
      courses={courses?.data}
      totalPage={courses?.meta.last_page}
      subjectName={subject}
    />
  );
};

export default SubjectCoursespage;
