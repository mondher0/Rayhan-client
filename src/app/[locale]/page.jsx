import NavBar from "../components/nav-bar/NavBar";
import Introduction from "../components/introduction/Introduction";
import TrustedCompanies from "../components/trusted-companies/TrustedCompanies";
import WhatIsRayhan from "../components/what-is-rayhan/WhatIsRayhan";
import AllInOne from "../components/all-in-one/AllInOne";
import WhatYouDo from "../components/what-you-do/WhatYouDo";
import Features from "../components/features/Features";
import WhatTheySay from "../components/what-they-say/WhatTheySay";
import OurPublicLives from "../components/our-public-lives/OurPublicLives";
import Footer from "../components/footer/Footer";
import GetStarted from "../components/get-started/GetStarted";
import { baseUrl } from "@/utils/constants";

export default async function Home() {
  // get reviews
  const getReviews = async () => {
    try {
      const response = await fetch(`${baseUrl}/landing_page/reviews/get`, {
        cache: "no-cache",
      });
      const data = await response.json();
      console.log(data);
      return data?.data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  // get parteners info
  const getPartnersInfo = async () => {
    try {
      const response = await fetch(`${baseUrl}/landing_page/partners/get`, {
        cache: "no-cache",
      });
      const data = await response.json();
      console.log("----------from profile--------------", data);
      return data?.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const reviewData = getReviews();
  const partnersData = getPartnersInfo();
  const [reviews, partners] = await Promise.all([reviewData, partnersData]);
  console.log(partners);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Introduction />
        <TrustedCompanies partners={partners} />
        <WhatIsRayhan />
        <AllInOne />
        <WhatYouDo />
        <Features />
        <WhatTheySay reviews={reviews} />
        <OurPublicLives />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
