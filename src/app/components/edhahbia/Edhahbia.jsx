import "./Edhahbia.css";
import "../balance/Balance.css";
const Edhahbia = () => {
  return (
    <form className="balance-input">
      <div className="balance-form-control">
        <div className="balance-half">
          <label htmlFor="name">Name in the card</label>
          <input type="text" id="name" />
        </div>
        <div className="balance-half">
          <label htmlFor="number">Number of the card</label>
          <input type="text" id="number" />
        </div>
      </div>
      <div className="balance-form-control">
        <div className="balance-half">
          <label htmlFor="expiry">Card expiry date</label>
          <input type="text" id="expiry" />
        </div>
        <div className="balance-half">
          <label htmlFor="cvc">CVC Code</label>
          <input type="text" id="cvc" />
        </div>
      </div>
      <div className="balance-form-control">
        <div className="balance-half">
          <label htmlFor="Promo code (optionel)">Promo code (optionel)</label>
          <input type="text" id="promo" />
        </div>
      </div>
      <button className="pay hover" type="submit">
        Subscibe in the course
      </button>
    </form>
  );
};

export default Edhahbia;
