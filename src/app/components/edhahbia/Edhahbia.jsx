import "./Edhahbia.css";
import "../balance/Balance.css";
import { useTranslations } from "next-intl";
import { useState } from "react";
import axiosInstance from "@/utils/utils";
import { baseUrl } from "@/utils/constants";
import Loader from "../loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
const Edhahbia = ({ usecase, id, lesson, enrollment, offerId }) => {
  const t = useTranslations("afterLogin");
  const [isLoading, setIsLoading] = useState();
  const [promoCode, setPromoCode] = useState();
  const router = useRouter();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      console.log(lesson);
      console.log(id);
      const data = {
        item_id: lesson
          ? parseInt(lesson)
          : offerId
          ? parseInt(offerId)
          : parseInt(enrollment),
        item_type: offerId ? "offer" : "enrollment",
      };
      promoCode && (data.promo_code_id = promoCode);
      console.log(data);
      const response = await axiosInstance.post(
        `${baseUrl}/payment/card`,
        data,
      );
      console.log(response);
      router.push(response?.data?.data?.url);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };
  return (
    <form className="balance-input" onSubmit={handleSubmit}>
      <ToastContainer />
      {/* <div className="balance-form-control">
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
      </div> */}
      <div className="balance-form-control">
        <div className="balance-half">
          <label htmlFor="Promo code (optionel)">
            {t("Promo code (optionel)")}
          </label>
          <input
            type="text"
            id="promo"
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>
      </div>
      <button className="pay hover" type="submit">
        {isLoading ? (
          <Loader />
        ) : usecase === "profile" ? (
          t("edit")
        ) : (
          t("subscribeBtn")
        )}
      </button>
    </form>
  );
};

export default Edhahbia;
