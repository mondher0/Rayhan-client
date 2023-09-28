import "./InviteFriends.css";

const InviteFriends = () => {
  return (
    <div className="ivite-freinds">
      <h1>Invite your friends and get balance</h1>
      <p className="desc">
        When your friend registers with your referral code, he benefits from our
        awsome offers and you receive 300 DA to spend in courses !
      </p>
      <div className="form-controle">
        <label htmlFor="first-name">Share this referral code</label>
        <div className="copy">
          <input type="text" id="first-name" disabled value={121654} />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default InviteFriends;
