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

const ProfileFeatures = () => {
  const [chargeBalance, setChargeBalance] = useState("");
  const [invateFriends, setInvateFriends] = useState("");
  const [personalInfo, setPersonalInfo] = useState("selected");
  const [help, setHelp] = useState("");
  const [sendReport, setSendReport] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");

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
    } else if (feature === "Charge my balance") {
      setChargeBalance("selected");
      setPersonalInfo("");
      setInvateFriends("");
      setHelp("");
      setSendReport("");
      setTermsAndConditions("");
    } else if (feature === "withdraw my rewards") {
      setChargeBalance("selected");
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
    } else if (feature === "Help") {
      setHelp("selected");
      setChargeBalance("");
      setInvateFriends("");
      setPersonalInfo("");
      setSendReport("");
      setTermsAndConditions("");
    } else if (feature === "Send reports or Contact us") {
      setSendReport("selected");
      setChargeBalance("");
      setInvateFriends("");
      setHelp("");
      setPersonalInfo("");
      setTermsAndConditions("");
    } else if (feature === "Terms & Conditions") {
      setTermsAndConditions("selected");
      setChargeBalance("");
      setInvateFriends("");
      setHelp("");
      setSendReport("");
      setPersonalInfo("");
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
          <p>Personal information</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          style={chargeBalance ? style : {}}
          onClick={() => {
            handleClick("Charge my balance");
          }}
        >
          <p>Charge my balance</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          onClick={() => {
            handleClick("Charge my balance");
          }}
        >
          <p>withdraw my rewards</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          style={invateFriends ? style : {}}
          onClick={() => {
            handleClick("Invite friends");
          }}
        >
          <p>Invite friends</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          style={help ? style : {}}
          onClick={() => {
            handleClick("Help");
          }}
        >
          <p>Help</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          style={sendReport ? style : {}}
          onClick={() => {
            handleClick("Send reports or Contact us");
          }}
        >
          <p>Send reports</p>
          <IoIosArrowForward />
        </div>
        <div
          className="single-feature hover"
          style={termsAndConditions ? style : {}}
          onClick={() => {
            handleClick("Terms & Conditions");
          }}
        >
          <p>Terms & Conditions</p>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="visual-features">
        {personalInfo && <PersonalInformation />}
        {chargeBalance && <PaymentMethod useCase="profile" />}
        {invateFriends && <InviteFriends />}
        {help && <Help />}
        {sendReport && <SendReport />}
        {termsAndConditions && <TermsConditions />}
      </div>
    </div>
  );
};

export default ProfileFeatures;
