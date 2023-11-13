import OfferCard from "../offer-card/OfferCard";
import "./AllOffers.css";

const AllOffers = ({ offers }) => {
  return (
    <div className="offers-cards">
      {offers?.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default AllOffers;
