import PaymentMethod from "../payment-method/PaymentMethod";
import SingleFeature from "../single-feature/SingleFeature";
import "./ProfileFeatures.css";

const ProfileFeatures = () => {
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
        <PaymentMethod useCase="profile" />
      </div>
    </div>
  );
};

export default ProfileFeatures;
