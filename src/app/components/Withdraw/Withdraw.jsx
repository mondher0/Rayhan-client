import { useState } from "react";
import withdrawIcon from "./withdraw.svg";
import requestIcon from "./request.svg";
import "../edhahbia/Edhahbia.css";
import "../balance/Balance.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import WithdrawForm from "../withdrawForm/WithdrawForm";
import RequestForm from "../request-form/RequestForm";

const Withdraw = () => {
  const t = useTranslations("afterLogin");
  const style = {
    border: "1px solid , #C5D5FF",
    background: "#E9EFFF",
    width: "50%",
  };
  const [withdraw, setWithdraw] = useState("selected");
  const [request, setRequest] = useState("");

  // handle select
  const handleSelect = (value) => {
    if (value === "withdraw") {
      setWithdraw("selected");
      setRequest("");
    }
    if (value === "request") {
      setWithdraw("");
      setRequest("selected");
    }
  };
  return (
    <section className="payment-method">
      <div className="payment-method-card">
        <p className="title">Current Balance: 14000 DA</p>
        <div className="methods" style={{ width: "100%" }}>
          <div
            className="method hover"
            onClick={() => handleSelect("withdraw")}
            style={
              withdraw
                ? style
                : {
                    width: "50%",
                  }
            }
          >
            <Image src={withdrawIcon} width={50} height={50} />
            {t("addToMyBalance")}
          </div>
          <div
            className="method hover"
            onClick={() => handleSelect("request")}
            style={
              request
                ? style
                : {
                    width: "50%",
                  }
            }
          >
            <Image src={requestIcon} width={50} height={50} />
            {t("Money Withdrawal Request")}
          </div>
        </div>
        {withdraw && <WithdrawForm />}
        {request && <RequestForm />}
      </div>
    </section>
  );
};

export default Withdraw;
