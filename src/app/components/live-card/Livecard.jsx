import Image from "next/image";
import "./LiveCard.css";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";

const Livecard = ({ btnText, verify }) => {
  return (
    <div className="live">
      <div className="live-card">
        {verify === "rooms" ? (
          <div className="timer">
            <span className="time">00</span>
            <span className="time">00</span>
            <span className="time">00</span>
          </div>
        ) : (
          <div className="timer notimer"></div>
        )}
        <div className="live-details">
          <p>Step design sprint for beginner</p>
          <span>
            <AiOutlineVideoCamera color="#fff" />
            Live
          </span>
          <span>
            <BsStopwatch color="#fff" />2 h 30min
          </span>
          <span>
            <AiOutlineCalendar color="#fff" /> 12/12/2021
          </span>
          <div className="teacher-live-details">
            <div className="teacher-profile-pic">
              <Image
                src="/images/avatar.png"
                alt="Picture of the author"
                width={50}
                height={50}
              />
            </div>
            <div className="teacher-live-info">
              <p className="fn">Mondher Mameri</p>
              <p className="ln">UX/UI Designer</p>
            </div>
          </div>
        </div>
      </div>
      <button className="live-btn hover">{btnText} 1200DA</button>
    </div>
  );
};

export default Livecard;
