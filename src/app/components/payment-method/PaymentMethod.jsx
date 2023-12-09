"use client";
import "./PaymentMethod.css";
import balancee from "./balance.svg";
import edhahabia from "./edhahabia.svg";
import reciept from "./reciept.svg";
import reward from "./reward.svg";
import cod from "./cod.svg";
import Image from "next/image";
import Balance from "../balance/Balance";
import { useState } from "react";
import Edhahbia from "../edhahbia/Edhahbia";
import Receipt from "../reciept/Receipt";
import Cod from "../cod/Cod";
import Rewards from "../rewards/Rewards";
import { useTranslations } from "next-intl";

const PaymentMethod = ({ useCase, id, lesson, enrollment, userInfo }) => {
  const [balanceCard, setBalanceCard] = useState(!useCase && "selected");
  const [edhahbiaCard, setEdhahbiaCard] = useState(useCase && "selected");
  const [codCard, setCodeCard] = useState("");
  const [rewardCard, setRewardCard] = useState("");
  const [recieptCard, setRecieptCard] = useState("");
  const { userable } = userInfo || {};
  const { balance } = userable || {};
  const t = useTranslations("afterLogin");

  const selected = {
    borderRadius: "10px",
    border: " 1px solid #00DDAF",
    background: "#4AFFD9",
    boxShadow: "0px 12px 51px 0px rgba(0, 221, 175, 0.24)",
  };

  // handle select
  const handleSelect = (value) => {
    if (value === "balanceCard") {
      setBalanceCard("selected");
      setEdhahbiaCard("");
      setCodeCard("");
      setRewardCard("");
      setRecieptCard("");
    }
    if (value === "edhahbiaCard") {
      setBalanceCard("");
      setEdhahbiaCard("selected");
      setCodeCard("");
      setRewardCard("");
      setRecieptCard("");
    }
    if (value === "codCard") {
      setBalanceCard("");
      setEdhahbiaCard("");
      setCodeCard("selected");
      setRewardCard("");
      setRecieptCard("");
    }
    if (value === "recieptCard") {
      setBalanceCard("");
      setEdhahbiaCard("");
      setCodeCard("");
      setRewardCard("");
      setRecieptCard("selected");
    }
    if (value === "rewardCard") {
      setBalanceCard("");
      setEdhahbiaCard("");
      setCodeCard("");
      setRewardCard("selected");
      setRecieptCard("");
    }
  };

  return (
    <section className="payment-method">
      {!useCase && <p className="title">{t("choose")}</p>}
      <div className="payment-method-card">
        {useCase === "profile" ? (
          <p className="title">Current Balance: {balance} DA</p>
        ) : (
          <p className="title">{t("choose")}</p>
        )}
        <div className="methods">
          {!useCase && (
            <div
              className="method hover"
              style={balanceCard && selected}
              onClick={() => {
                handleSelect("balanceCard");
              }}
            >
              <Image src={balancee} width={50} height={50} />
              {t("myBalance")}
            </div>
          )}
          <div
            className="method hover"
            style={edhahbiaCard ? selected : {}}
            onClick={() => {
              handleSelect("edhahbiaCard");
            }}
          >
            <Image src={edhahabia} width={50} height={50} />
            {t("edhahabia")}
          </div>
          <div
            className="method hover"
            style={recieptCard ? selected : {}}
            onClick={() => {
              handleSelect("recieptCard");
            }}
          >
            <Image src={reciept} width={50} height={50} />
            {t("reciept")}
          </div>
          {/* <div
            className="method hover"
            style={codCard ? selected : {}}
            onClick={() => {
              handleSelect("codCard");
            }}
          >
            <Image src={cod} width={50} height={50} />
            COD
          </div> */}
          <div
            className="method hover"
            style={rewardCard ? selected : {}}
            onClick={() => {
              handleSelect("rewardCard");
            }}
          >
            <Image src={reward} width={50} height={50} />
            {t("rewards")}
          </div>
        </div>
        {balanceCard && (
          <Balance
            usecase={useCase}
            id={id}
            lesson={lesson}
            enrollment={enrollment}
          />
        )}
        {edhahbiaCard && (
          <Edhahbia
            usecase={useCase}
            id={id}
            lesson={lesson}
            enrollment={enrollment}
          />
        )}
        {recieptCard && (
          <Receipt
            usecase={useCase}
            id={id}
            lesson={lesson}
            enrollment={enrollment}
          />
        )}
        {/* {codCard && <Cod usecase={useCase} />} */}
        {rewardCard && (
          <Rewards
            usecase={useCase}
            id={id}
            lesson={lesson}
            enrollment={enrollment}
          />
        )}
      </div>
    </section>
  );
};

export default PaymentMethod;
