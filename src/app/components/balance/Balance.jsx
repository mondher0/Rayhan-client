"use client";
import { useTranslations } from "next-intl";
import "./Balance.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axiosInstance from "@/utils/utils";
import { baseUrl } from "@/utils/constants";
import Loader from "../loader/Loader";
import "react-toastify/dist/ReactToastify.css";

const Balance = ({ usecase, id, lesson, enrollment }) => {
  const t = useTranslations("afterLogin");
  const [isLoading, setIsLoading] = useState();
  const [promoCode, setPromoCode] = useState();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      console.log(lesson);
      console.log(id);
      const data = {
        item_id: lesson ? parseInt(lesson) : parseInt(enrollment),
        item_type: "enrollment",
      };
      console.log(data);
      promoCode && (data.promo_code_id = promoCode);
      const response = await axiosInstance.post(
        `${baseUrl}/payment/balance`,
        data,
      );
      console.log(response);
      setIsLoading(false);
      toast.success("Your payment has been successfully completed");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <form className="balance-input" onSubmit={handleSubmit}>
      <ToastContainer />
      <label htmlFor="balance">{t("Promo code (optionel)")}</label>
      <input
        type="text"
        id="balance"
        onChange={(e) => setPromoCode(e.target.value)}
      />
      <button className="pay hover" type="submit" disabled={isLoading}>
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

export default Balance;
