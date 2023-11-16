import { useTranslations } from "next-intl";
import "../personal-information/PersonalInformation.css";

const WithdrawForm = () => {
  const t = useTranslations("afterLogin");
  return (
    <div className="personal-information">
      <form>
        <div className="btn">
          <button type="submit" className="hover">
            {t("edit")}
          </button>
        </div>
        <div className="form-controle">
          <label htmlFor="first-name">{t("How much do you want to add")}</label>
          <input type="text" id="first-name" />
        </div>
      </form>
    </div>
  );
};

export default WithdrawForm;
