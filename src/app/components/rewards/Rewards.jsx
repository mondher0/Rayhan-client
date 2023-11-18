"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/Loader";
import { baseUrl } from "@/utils/constants";
import axiosInstance from "@/utils/utils";

const Rewards = ({ usecase }) => {
  const t = useTranslations("afterLogin");
  const [amount, setAmount] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance .post(
        `${baseUrl}/student/withdraw/charge-balance/reward`,
        {
          amount: amount,
        }
      );
      console.log(response);
      if (response.status) {
        toast.success("your request has been sent successfully");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <form
      className="balance-input"
      onSubmit={usecase === "profile" ? handleSubmit : null}
    >
      <ToastContainer />
      <label htmlFor="balance">{t("Promo code (optionel)")})</label>
      <input
        type="text"
        id="balance"
        onChange={(e) => setAmount(e.target.value)}
      />
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

export default Rewards;
