"use client";
import "./PaymentMethod.css";
import balance from "./balance.svg";
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

const PaymentMethod = ({ useCase }) => {
  const [balanceCard, setBalanceCard] = useState(!useCase && "selected");
  const [edhahbiaCard, setEdhahbiaCard] = useState(useCase && "selected");
  const [codCard, setCodeCard] = useState("");
  const [rewardCard, setRewardCard] = useState("");
  const [recieptCard, setRecieptCard] = useState("");

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
      {!useCase && <p className="title">Choose your payment method</p>}
      <div className="payment-method-card">
        {useCase === "profile" ? (
          <p className="title">Current Balance: 14000 DA</p>
        ) : (
          <p className="title">Choose your payment method</p>
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
              <Image src={balance} width={50} height={50} />
              My balance
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
            Dahabia
          </div>
          <div
            className="method hover"
            style={recieptCard ? selected : {}}
            onClick={() => {
              handleSelect("recieptCard");
            }}
          >
            <Image src={reciept} width={50} height={50} />
            Import reciept
          </div>
          <div
            className="method hover"
            style={codCard ? selected : {}}
            onClick={() => {
              handleSelect("codCard");
            }}
          >
            <Image src={cod} width={50} height={50} />
            COD
          </div>
          <div
            className="method hover"
            style={rewardCard ? selected : {}}
            onClick={() => {
              handleSelect("rewardCard");
            }}
          >
            <Image src={reward} width={50} height={50} />
            Rewards
          </div>
        </div>
        {balanceCard && <Balance usecase={useCase} />}
        {edhahbiaCard && <Edhahbia usecase={useCase} />}
        {recieptCard && <Receipt usecase={useCase} />}
        {codCard && <Cod usecase={useCase} />}
        {rewardCard && <Rewards usecase={useCase} />}
      </div>
    </section>
  );
};

export default PaymentMethod;
