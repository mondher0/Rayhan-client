import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./offers.css";
import AllOffers from "@/app/components/all-offers/AllOffers";
import Pagination from "@/app/components/pagination/Pagination";

const OffresPage = ({ searchParams }) => {
  const { page } = searchParams;
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className="offers">
          <p>Offers</p>
          <AllOffers />
        </section>
        <section className="pagination-bar">
          <Pagination currentPage={page} url="/offers" />
        </section>
      </main>
    </>
  );
};

export default OffresPage;
