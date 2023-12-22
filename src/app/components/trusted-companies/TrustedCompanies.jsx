import CompaniesIcons from "@/atoms/companies-icons/CompaniesIcons";
import "./TrustedCompanies.css";
import { useTranslations } from "next-intl";

const TrustedCompanies = ({ partners }) => {
  const t = useTranslations("Index");
  return (
    <section className="trusted-companies">
      <p className="trusted-text">{t("trustedCompanies")}</p>
      <CompaniesIcons partners={partners} />
    </section>
  );
};

export default TrustedCompanies;
