import { useTranslations } from "next-intl";
import NavBar from "../components/nav-bar/NavBar";
import Introduction from "../components/introduction/Introduction";
import TrustedCompanies from "../components/trusted-companies/TrustedCompanies";
import WhatIsRayhan from "../components/what-is-rayhan/WhatIsRayhan";
import AllInOne from "../components/all-in-one/AllInOne";
import WhatYouDo from "../components/what-you-do/WhatYouDo";
import Features from "../components/features/Features";
import WhatTheySay from "../components/what-they-say/WhatTheySay";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Introduction />
        <TrustedCompanies />
        <WhatIsRayhan />
        <AllInOne />
        <WhatYouDo />
        <Features />
        <WhatTheySay />
      </main>
    </>
  );
}
