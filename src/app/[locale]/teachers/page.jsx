import { getToken } from "@/utils/lib";
import Teachers from "./Teachers";
import { baseUrl } from "@/utils/constants";

const TeachersPage = async ({ searchParams }) => {
  const { page } = searchParams;

  // get teachers from the server
  const getTeachers = async () => {
    try {
      const token = getToken();
      const response = await fetch(
        `${baseUrl}/student/teacher/get?paginate=true&page=${page}`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const teachers = await response.json();
      console.log(
        "------------response from teachers page-----------",
        teachers
      );
      return teachers.data;
    } catch (error) {
      console.log(
        "--------------------error from teachers page-------------------",
        error
      );
      throw new Error(error);
    }
  };
  const teachers = await getTeachers();
  console.log("------------teachers from teachers page-----------", teachers);
  return (
    <Teachers
      currentPage={page}
      teachers={teachers?.data}
      totalPage={teachers?.total}
    />
  );
};

export default TeachersPage;
