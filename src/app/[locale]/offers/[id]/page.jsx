import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./offer-details.css";
import SingleOffer from "@/app/components/single-offer/SingleOffer";
const OfferDetails = () => {
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className="offer-details">
          <p>Offers/Offer details</p>
          <SingleOffer />
        </section>
      </main>
    </>
  );
};

export default OfferDetails;
