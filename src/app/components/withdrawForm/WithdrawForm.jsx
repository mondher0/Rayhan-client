"use client";
import { useTranslations } from "next-intl";
import "../personal-information/PersonalInformation.css";
import { useState } from "react";
import { baseUrl } from "@/utils/constants";
import axiosInstance from "@/utils/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WithdrawForm = () => {
  const t = useTranslations("afterLogin");
  const style = {
    width: "100%",
  };
  const [amount, setAmount] = useState("");

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("amount", amount);
      const response = await axiosInstance.post(
        `${baseUrl}/student/withdraw/charge-balance/reward`,
        {
          amount: parseInt(amount),
        },
      );
      console.log(response);
      if (response.status) {
        toast.success("your request has been sent successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="personal-information" style={style}>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="btn">
          <button type="submit" className="hover">
            {t("edit")}
          </button>
        </div>
        <div className="form-controle" style={style}>
          <label htmlFor="first-name">{t("How much do you want to add")}</label>
          <input
            type="number"
            id="first-name"
            style={style}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default WithdrawForm;
