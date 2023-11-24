"use client";
import { useState } from "react";
import PaymentMethod from "../payment-method/PaymentMethod";
import PersonalInformation from "../personal-information/PersonalInformation";
import "./ProfileFeatures.css";
import InviteFriends from "../invite-friends/InviteFriends";
import Help from "../help/Help";
import SendReport from "../send-report/SendReport";
import TermsConditions from "../terms-conditions/TermsConditions";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";
import Withdraw from "../Withdraw/Withdraw";

const ProfileFeatures = ({ userInfo }) => {
  const [chargeBalance, setChargeBalance] = useState("");
  const [invateFriends, setInvateFriends] = useState("");
  const [personalInfo, setPersonalInfo] = useState("selected");
  const [help, setHelp] = useState("");
  const [sendReport, setSendReport] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [withDrawMyReward, setWithDrawMyReward] = useState("");
  const t = useTranslations("afterLogin");

  const style = {
    border: "1px solid , #C5D5FF",
    background: "#E9EFFF",
  };

  // handle click on features
  const handleClick = (feature) => {
    if (feature === "Personal informations") {
      setPersonalInfo("selected");
      setChargeBalance("");
      setInvateFriends("");
      setHelp("");
      setSendReport("");
      setTermsAndConditions("");
      setWithDrawMyReward("");
    } else if (feature === "Charge my balance") {
      setChargeBalance("selected");
      setPersonalInfo("");
      setInvateFriends("");
      setHelp("");
      setSendReport("");
      setTermsAndConditions("");
      setWithDrawMyReward("");
    } else if (feature === "withdraw my rewards") {
      setWithDrawMyReward("selected");
      setChargeBalance("");
      setPersonalInfo("");
      setInvateFriends("");
      setHelp("");
      setSendReport("");
      setTermsAndConditions("");
    } else if (feature === "Invite friends") {
      setInvateFriends("selected");
      setChargeBalance("");
      setPersonalInfo("");
      setHelp("");
      setSendReport("");
      setTermsAndConditions("");
      setWithDrawMyReward("");
    } else if (feature === "Help") {
      setHelp("selected");
      setChargeBalance("");
      setInvateFriends("");
      setPersonalInfo("");
      setSendReport("");
      setTermsAndConditions("");
      setWithDrawMyReward("");
    } else if (feature === "Send reports or Contact us") {
      setSendReport("selected");
      setChargeBalance("");
      setInvateFriends("");
      setHelp("");
      setPersonalInfo("");
      setTermsAndConditions("");
      setWithDrawMyReward("");
    } else if (feature === "Terms & Conditions") {
      setTermsAndConditions("selected");
      setChargeBalance("");
      setInvateFriends("");
      setHelp("");
      setSendReport("");
      setPersonalInfo("");
      setWithDrawMyReward("");
    }
  };
  return (
    <div className="profile-features">
      <div className="features">
        <div
          className="single-feature hover"
          style={personalInfo ? style : {}}
          onClick={() => {
            handleClick("Personal informations");
          }}
        >
          <p>{t("personalInformation")}</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          style={chargeBalance ? style : {}}
          onClick={() => {
            handleClick("Charge my balance");
          }}
        >
          <p>{t("chargeMyBalance")}</p>
          <IoIosArrowForward />
        </div>
        <div
          style={withDrawMyReward ? style : {}}
          className="single-feature hover"
          onClick={() => {
            handleClick("withdraw my rewards");
          }}
        >
          <p>{t("widhDrawMyReward")}</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          style={invateFriends ? style : {}}
          onClick={() => {
            handleClick("Invite friends");
          }}
        >
          <p>{t("inviteFriends")}</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          style={help ? style : {}}
          onClick={() => {
            handleClick("Help");
          }}
        >
          <p>{t("help")}</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          style={sendReport ? style : {}}
          onClick={() => {
            handleClick("Send reports or Contact us");
          }}
        >
          <p>{t("sendReports")}</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          style={termsAndConditions ? style : {}}
          onClick={() => {
            handleClick("Terms & Conditions");
          }}
        >
          <p>{t("termsAndConditions")}</p>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="visual-features">
        {personalInfo && <PersonalInformation userInfo={userInfo} />}
        {chargeBalance && (
          <PaymentMethod useCase="profile" userInfo={userInfo} />
        )}
        {invateFriends && <InviteFriends userInfo={userInfo} />}
        {help && <Help />}
        {sendReport && <SendReport />}
        {termsAndConditions && <TermsConditions />}
        {withDrawMyReward && <Withdraw userInfo={userInfo} />}
      </div>
    </div>
  );
};

export default ProfileFeatures;
