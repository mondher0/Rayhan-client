import Image from "next/image";
import "./Receipt.css";
import file from "./file.svg";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/Loader";
import axiosInstance from "@/utils/utils";
import { baseUrl } from "@/utils/constants";

const Receipt = ({ usecase, id, lesson, enrollment, offerId }) => {
  const t = useTranslations("afterLogin");
  const [isLoading, setIsLoading] = useState();
  const [promoCode, setPromoCode] = useState();
  const [passbook, setPassbook] = useState();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      console.log(lesson);
      console.log(id);
      const formData = new FormData();
      formData.append("passbook", passbook);
      formData.append(
        "item_id",
        lesson
          ? parseInt(lesson)
          : offerId
          ? parseInt(offerId)
          : parseInt(enrollment),
      );
      formData.append("item_type", offerId ? "offer" : "enrollment");
      promoCode && formData.append("promo_code_id", promoCode);
      const response = await axiosInstance.post(
        `${baseUrl}/payment/bank-transfer`,
        formData,
      );
      console.log(response);
      toast.success("Your payment has been successfully completed");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  // handle submit charge
  const handleSubmitCharge = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      console.log(lesson);
      console.log(id);
      const formData = new FormData();
      formData.append("passbook", passbook);
      formData.append("amount", promoCode);
      const response = await axiosInstance.post(
        `${baseUrl}/student/withdraw/charge-balance/bank-transfer`,
        formData,
      );
      console.log(response);
      toast.success("Your payment has been successfully completed");
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
      onSubmit={usecase === "profile" ? handleSubmitCharge : handleSubmit}
    >
      <ToastContainer />
      <div className="form-recu">
        <div className="recu">
          <Image src={file} height={50} width={50} />
          <label htmlFor="receipt" className="hover label">
            <span className="pdf">{t("importReceipt")}</span>
            <span className="img-file">{t("pdfOrImage")}</span>
          </label>
          <input
            type="file"
            id="receipt"
            onChange={(e) => setPassbook(e.target.files[0])}
          />
        </div>
      </div>
      <label htmlFor="balance">{t("Promo code (optionel)")}</label>
      <input
        type="text"
        id="balance"
        required={usecase === "profile" ? true : false}
        onChange={(e) => setPromoCode(e.target.value)}
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

export default Receipt;
