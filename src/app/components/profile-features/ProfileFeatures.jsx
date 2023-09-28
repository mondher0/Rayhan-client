"use client";
import { useState } from "react";
import PaymentMethod from "../payment-method/PaymentMethod";
import PersonalInformation from "../personal-information/PersonalInformation";
import SingleFeature from "../single-feature/SingleFeature";
import "./ProfileFeatures.css";
import InviteFriends from "../invite-friends/InviteFriends";
import Help from "../help/Help";
import SendReport from "../send-report/SendReport";
import TermsConditions from "../terms-conditions/TermsConditions";

const ProfileFeatures = () => {
  const [chargeBalance, setChargeBalance] = useState("");
  const [invateFriends, setInvateFriends] = useState("");
  const [personalInfo, setPersonalInfo] = useState("");
  const [help, setHelp] = useState("");
  const [sendReport, setSendReport] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("selected");
  return (
    <div className="profile-features">
      <div className="features">
        <SingleFeature text="Personal informations" />
        <SingleFeature text="Charge my balance" />
        <SingleFeature text="withdraw my rewards" />
        <SingleFeature text="Invite friends" />
        <SingleFeature text="Help" />
        <SingleFeature text="Send reports or Contact us" />
        <SingleFeature text="Terms & Conditions" />
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
