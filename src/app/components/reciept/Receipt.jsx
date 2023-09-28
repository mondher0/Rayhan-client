import Image from "next/image";
import "./Receipt.css";
import file from "./file.svg";

const Receipt = ({ usecase }) => {
  return (
    <form className="balance-input">
      <div className="form-recu">
        <div className="recu">
          <Image src={file} height={50} width={50} />
          <label htmlFor="receipt" className="hover label">
            <span className="pdf">import receip</span>
            <span className="img-file">pdf or picture</span>
          </label>
          <input type="file" id="receipt" />
        </div>
      </div>
      <label htmlFor="balance">Promo code (optionel)</label>
      <input type="text" id="balance" />
      <button className="pay hover" type="submit">
        {usecase === "profile" ? "Edit" : "Subscibe in the course"}
      </button>
    </form>
  );
};

export default Receipt;
