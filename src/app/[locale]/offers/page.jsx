import "./offers.css";
import Offers from "./Offers";
import { getToken } from "@/utils/lib";
import { baseUrl } from "@/utils/constants";

const OffresPage = async ({ searchParams }) => {
  const { page } = searchParams;

  // get offers from the server
  const getOffers = async () => {
    try {
      const token = getToken();
      const response = await fetch(
        `${baseUrl}/promotion/get?paginate=true&page=${page}`,
        {
          cache: "no-cache",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const offers = await response.json();
      console.log("------------response from offers page-----------", offers);
      return offers.data;
    } catch (error) {
      console.log(
        "--------------------error from offers page-------------------",
        error
      );
      throw new Error(error);
    }
  };
  const offers = await getOffers();
  console.log("------------offers from offers page-----------", offers);
  return (
    <Offers
      currentPage={page}
      totalPage={offers?.total}
      offers={offers?.data}
    />
  );
};

export default OffresPage;
