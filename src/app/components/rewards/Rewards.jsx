"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/Loader";
import { baseUrl } from "@/utils/constants";
import axiosInstance from "@/utils/utils";

const Rewards = ({ usecase, id, lesson, enrollment }) => {
  const t = useTranslations("afterLogin");
  const [amount, setAmount] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(
        `${baseUrl}/student/withdraw/charge-balance/reward`,
        {
          amount: amount,
        },
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

  // handle submit
  const handleSubmitRewards = async (e) => {
    e.preventDefault();
    console.log("here rewards payment");
    try {
      setIsLoading(true);
      console.log(lesson);
      console.log(id);
      const data = {
        item_id: lesson ? parseInt(lesson) : parseInt(enrollment),
        item_type: "enrollment",
      };
      amount && (data.promo_code_id = amount);
      console.log(data);
      const response = await axiosInstance.post(
        `${baseUrl}/payment/reward`,
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
    <form
      className="balance-input"
      onSubmit={usecase === "profile" ? handleSubmit : handleSubmitRewards}
    >
      <ToastContainer />
      <label htmlFor="balance">{t("How much do you want to add")}</label>
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
