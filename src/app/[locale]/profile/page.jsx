import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./profile.css";
import Profile from "@/app/components/profile/Profile";

const ProfilePage = () => {
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className="profile-section">
          <p className="title">Profile</p>
          <Profile />
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
