import { useTranslations } from "next-intl";
import NavBar from "../components/nav-bar/NavBar";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <header>
      <NavBar />
    </header>
  );
}
