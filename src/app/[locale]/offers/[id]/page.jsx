import { getToken } from "@/utils/lib";
import SingleOfferDetails from "./SingleOfferDetails";
import { baseUrl } from "@/utils/constants";
const OfferDetails = async ({ params }) => {
  const { id } = params;

  // get single offer from the server
  const getSingleOffer = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${baseUrl}/promotion/get/${id}`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const offer = await response.json();
      console.log("------------response from getSingleOffer-----------", offer);
      return offer.data;
    } catch (error) {
      console.log(
        "------------------error from getSingleOffer------------------",
        error
      );
      throw new Error(error);
    }
  };
  const offer = await getSingleOffer();
  console.log("------------offer from getSingleOffer-----------", offer);
  return <SingleOfferDetails offer={offer} />;
};

export default OfferDetails;
