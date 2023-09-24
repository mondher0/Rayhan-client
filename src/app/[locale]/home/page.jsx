import LoginNavBar from "@/app/components/login-nav-bar/LoginNavBar";
import "./home.css";
import WatchedCourses from "@/app/components/watched-courses/WatchedCourses";
import FeaturesCourses from "@/app/components/features-courses/FeaturesCourses";

const HomePage = () => {
  return (
    <>
      <header>
        <LoginNavBar />
      </header>
      <main>
        <section className="hero"></section>
        <section className="features">
          <div className="watched-and-teachers">
            <div className="watched">
              <h1 className="watched-title">Continue your courses</h1>
              <WatchedCourses />
            </div>
            <div className="teachers">
              <h1 className="watched-title">Popular teachers</h1>
            </div>
          </div>
          <FeaturesCourses />
        </section>
      </main>
    </>
  );
};

export default HomePage;
