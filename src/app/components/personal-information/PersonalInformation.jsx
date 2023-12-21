"use client";
import { useTranslations } from "next-intl";
import "./PersonalInformation.css";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/utils";
import { baseUrl } from "@/utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PersonalInformation = ({ userInfo }) => {
  const { first_name, last_name, phone } = userInfo || {};
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  // update user info
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      phone: phoneNumber,
    };
    console.log(data);
    oldPassword && (data.password = oldPassword);
    newPassword && (data.password_confirmation = newPassword);
    try {
      const response = await axiosInstance.post(
        `${baseUrl}/auth/student/profile/update`,
        data,
      );
      console.log(response);
      toast.success("updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    setFirstName(first_name);
    setLastName(last_name);
    setPhoneNumber(phone);
  }, []);
  const t = useTranslations("afterLogin");
  return (
    <div className="personal-information">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="btn">
          <button type="submit" className="hover">
            {t("edit")}
          </button>
        </div>

        <div className="form-controle">
          <label htmlFor="first-name">{t("firstName")}</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-controle">
          <label htmlFor="last-name">{t("lastName")}</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-controle">
          <label htmlFor="phone-number">{t("phoneNumber")}</label>
          <input
            type="tel"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-controle">
          <label htmlFor="old">{t("newPassword")}</label>
          <input
            type="password"
            id="old"
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="form-controle">
          <label htmlFor="new">{t("oldPassword")}</label>
          <input
            type="password"
            id="new"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
