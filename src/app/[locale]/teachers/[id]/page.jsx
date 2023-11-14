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
        teacher
      );
      return teacher.data;
    } catch (error) {
      console.log(
        "--------------------error from teacher details page-------------------",
        error
      );
      throw new Error(error);
    }
  };
  const teacher = await getTeacher();
  console.log(
    "------------teacher from teacher details page-----------",
    teacher
  );
  return <div>hello</div>;
};

export default TeacherDetailsPage;
