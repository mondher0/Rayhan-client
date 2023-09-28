import { useTranslations } from "next-intl";
import "./PersonalInformation.css";

const PersonalInformation = () => {
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
          <label htmlFor="first-name">{t("firstName")}</label>
          <input type="text" id="first-name" />
        </div>
        <div className="form-controle">
          <label htmlFor="last-name">{t("lastName")}</label>
          <input type="text" id="last-name" />
        </div>
        <div className="form-controle">
          <label htmlFor="phone-number">{t("phoneNumber")}</label>
          <input type="text" id="phone-number" />
        </div>
        <div className="form-controle">
          <label htmlFor="old">{t("oldPassword")}</label>
          <input type="password" id="old" />
        </div>
        <div className="form-controle">
          <label htmlFor="new">{t("newPassword")}</label>
          <input type="password" id="new" />
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
