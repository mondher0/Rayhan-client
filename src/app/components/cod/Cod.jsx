"use client";
import { baseUrl } from "@/utils/constants";
import axiosInstance from "@/utils/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/Loader";

const Cod = ({ usecase }) => {
  const t = useTranslations("afterLogin");
  const [cod, setCode] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(
        `${baseUrl}/student/withdraw/charge-balance/cod`,
        {
          code: cod,
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
      <label htmlFor="balance">{t("your Cod code")}</label>
      <input
        type="text"
        id="balance"
        onChange={(e) => setCode(e.target.value)}
      />
      <label htmlFor="balance">{t("Promo code (optionel)")}</label>
      <input type="text" id="balance" />
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

export default Cod;
