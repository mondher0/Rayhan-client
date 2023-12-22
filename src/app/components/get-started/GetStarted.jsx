import Image from "next/image";
import "./get-started.css";
import playStoreBtn from "./btn-playstore.svg";
import appStoreBtn from "./btn-appstore.svg";
import asset1 from "./asset1.svg";
import asset2 from "./asset2.svg";
const GetStarted = () => {
  return (
    <div className="get-started-container">
      <section className="container get-started">
        <div className="content">
          <h1>
            Ready to get <span>started?</span>
          </h1>
          <p>Download the application now and start your learning journey</p>
          <div className="buttons">
            <button className="button">
              <Image
                alt="image"
                src={playStoreBtn}
                width={200}
                height={60}
                className="hover"
              />
            </button>
            <button className="button">
              <Image
                alt="image"
                src={appStoreBtn}
                width={200}
                height={60}
                className="hover"
              />
            </button>
            {/* <Image
              alt="image"
              src={asset1}
              width={90}
              height={90}
              className="asset1"
            /> */}
          </div>
        </div>
        <div className="images">
          <Image
            alt="image"
            src="/images/phones.png"
            width={700}
            height={400}
          />
          <Image
            alt="image"
            src={asset2}
            width={20}
            height={20}
            className="asset2"
          />
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
