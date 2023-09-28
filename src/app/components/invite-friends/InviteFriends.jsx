import { useLocale, useTranslations } from "next-intl";
import "./InviteFriends.css";

const InviteFriends = () => {
  const t = useTranslations("afterLogin");
  const locale = useLocale();
  return (
    <div className="ivite-freinds">
      <h1>{t("inviteTitle")}</h1>
      <p className="desc">{t("inviteDesc")}</p>
      <div className={locale === "ar" ? "form-controle ar" : "form-controle"}>
        <label htmlFor="first-name">{t("shareReferralCode")}</label>
        <div className="copy">
          <input type="text" id="first-name" disabled value={121654} />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default InviteFriends;
