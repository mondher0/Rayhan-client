import "./subjects.css";
import { getToken } from "@/utils/lib";
import { baseUrl } from "@/utils/constants";
import Subjects from "./Subjects";

const SubjectsPage = async ({ searchParams }) => {
  const { page } = searchParams;

  // get subjects from the server
  const getSubjects = async () => {
    try {
      const token = getToken();
      const response = await fetch(
        `${baseUrl}/category/get?paginate=true&page=${page}`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const subjects = await response.json();
      console.log(
        "------------response from subjects page-----------",
        subjects
      );
      return subjects.data;
    } catch (error) {
      console.log(
        "--------------------error from subjects page-------------------",
        error
      );
      throw new Error(error);
    }
  };

  const subjects = await getSubjects();
  console.log("------------subjects from subjects page-----------", subjects);
  return (
    <Subjects
      subjects={subjects?.data}
      currentPage={page}
      totalPage={subjects?.from}
    />
  );
};

export default SubjectsPage;
