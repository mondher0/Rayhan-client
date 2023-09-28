import Image from "next/image";
import "./Receipt.css";
import file from "./file.svg";
import { useTranslations } from "next-intl";

const Receipt = ({ usecase }) => {
  const t = useTranslations("afterLogin");
  return (
    <form className="balance-input">
      <div className="form-recu">
        <div className="recu">
          <Image src={file} height={50} width={50} />
          <label htmlFor="receipt" className="hover label">
            <span className="pdf">{t("importReceipt")}</span>
            <span className="img-file">{t("pdfOrImage")}</span>
          </label>
          <input type="file" id="receipt" />
        </div>
      </div>
      <label htmlFor="balance">{t("Promo code (optionel)")}</label>
      <input type="text" id="balance" />
      <button className="pay hover" type="submit">
        {usecase === "profile" ? t("edit") : t("subscribeBtn")}
      </button>
    </form>
  );
};

export default Receipt;
