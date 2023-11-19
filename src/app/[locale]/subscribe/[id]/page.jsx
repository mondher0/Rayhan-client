import { baseUrl } from "@/utils/constants";
import Subscribe from "./Subscribe";
import { getToken } from "@/utils/lib";

const SubscribePage = async ({ params, searchParams }) => {
  const { id } = params;
  const { lesson } = searchParams;

  console.log("----------------------from subscruibe", id);
  console.log("----------------------from subscruibe", lesson);
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
  const course = await getCourseDetails();
  console.log("----------------------from subscruibe", course);

  return <Subscribe course={course} id={id} lesson={lesson} />;
};

export default SubscribePage;
