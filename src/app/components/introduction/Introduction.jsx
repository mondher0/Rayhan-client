import Student from "@/atoms/student/Student";
import "./Introduction.css";
import PlayStore from "@/atoms/playstore/PlayStore";
import AppStore from "@/atoms/appstore/AppStore";

const Introduction = () => {
  return (
    <section className="container intro">
      <div className=" intro-container">
        <div className="text">
          <h1 className="title">
            <span className="studying">Studying</span>
            Online is now much easier
          </h1>
          <p className="desc">
            Rayhane is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="intro-btns">
            <a className="intro-btn" href="#">
              <PlayStore />
            </a>
            <a className="intro-btn" href="#">
              <AppStore />
            </a>
          </div>
        </div>
      </div>
      <div className="intro-img">
        <Student />
      </div>
    </section>
  );
};

export default Introduction;
