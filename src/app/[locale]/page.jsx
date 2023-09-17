import { useTranslations } from "next-intl";
import NavBar from "../components/nav-bar/NavBar";
import Introduction from "../components/introduction/Introduction";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Introduction />
      </main>
    </>
  );
}
