import { useTranslations } from "next-intl";

const Rewards = ({ usecase }) => {
  const t = useTranslations("afterLogin");
  return (
    <form className="balance-input">
      <label htmlFor="balance">{t("Promo code (optionel)")})</label>
      <input type="text" id="balance" />
      <button className="pay hover" type="submit">
        {usecase === "profile" ? t("edit") : t("subscribeBtn")}
      </button>
    </form>
  );
};

export default Rewards;
