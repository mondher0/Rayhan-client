"use client";
import { useTranslations } from "next-intl";
import "./PersonalInformation.css";
import { useEffect, useState } from "react";

const PersonalInformation = ({ userInfo }) => {
  const { first_name, last_name, phone } = userInfo || {};
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  useEffect(() => {
    setFirstName(first_name);
    setLastName(last_name);
    setPhoneNumber(phone);
  }, []);
  const t = useTranslations("afterLogin");
  return (
    <div className="personal-information">
      <form>
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
          <label htmlFor="old">{t("oldPassword")}</label>
          <input type="password" id="old" />
        </div>
        <div className="form-controle">
          <label htmlFor="new">{t("newPassword")}</label>
          <input type="password" id="new" />
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
