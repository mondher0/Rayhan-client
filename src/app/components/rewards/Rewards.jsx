const Rewards = () => {
  return (
    <form className="balance-input">
      <label htmlFor="balance">Promo code (optionel)</label>
      <input type="text" id="balance" />
      <button className="pay hover" type="submit">
        Subscibe in the course
      </button>
    </form>
  );
};

export default Rewards;
