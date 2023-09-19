import { useTranslations } from "next-intl";
import NavBar from "../components/nav-bar/NavBar";
import Introduction from "../components/introduction/Introduction";
import TrustedCompanies from "../components/trusted-companies/TrustedCompanies";

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
      </main>
    </>
  );
}
