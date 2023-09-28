import "./Edhahbia.css";
import "../balance/Balance.css";
import { useTranslations } from "next-intl";
const Edhahbia = ({ usecase }) => {
  const t = useTranslations("afterLogin");
  return (
    <form className="balance-input">
      <div className="balance-form-control">
        <div className="balance-half">
          <label htmlFor="name">{t("name of the card")}</label>
          <input type="text" id="name" />
        </div>
        <div className="balance-half">
          <label htmlFor="number">{t("card number")}</label>
          <input type="text" id="number" />
        </div>
      </div>
      <div className="balance-form-control">
        <div className="balance-half">
          <label htmlFor="expiry">{t("expiration date")}</label>
          <input type="text" id="expiry" />
        </div>
        <div className="balance-half">
          <label htmlFor="cvc">CVC Code</label>
          <input type="text" id="cvc" />
        </div>
      </div>
      <div className="balance-form-control">
        <div className="balance-half">
          <label htmlFor="Promo code (optionel)">
            {t("Promo code (optionel)")}
          </label>
          <input type="text" id="promo" />
        </div>
      </div>
      <button className="pay hover" type="submit">
        {usecase === "profile" ? t("edit") : t("subscribeBtn")}
      </button>
    </form>
  );
};

export default Edhahbia;
