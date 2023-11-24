import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./quiz-modal.css";
import next from "./next.svg";
import prev from "./previous.svg";
import Image from "next/image";

const QuizModal = ({ open, onClose }) => {
  return (
    <Popup open={open} onClose={onClose} position="right center" modal>
      <div className="modal-title">Quizz</div>
      <div className="question-header">
        <div className="question-number">
          Question:
          <span
            style={{
              color: "#243752",
            }}
          >
            1
          </span>
        </div>
      </div>
      <div className="question-body">
        <p className="question-title">question title</p>
        <div className="questions">
          <div className="single-question">
            <input type="checkbox" name="question" id="question" />
            <label htmlFor="question">question</label>
          </div>
          <div className="single-question">
            <input type="checkbox" name="question" id="question" />
            <label htmlFor="question">question</label>
          </div>
        </div>
        <div className="question-footer">
          <div className="hover">
            <Image
              src={prev}
              alt="prev"
              width={40}
              height={40}
              className="prev"
            />
          </div>
          <div className="btn hover">Submit</div>
          <div className="hover">
            <Image
              src={next}
              alt="prev"
              width={40}
              height={40}
              className="next"
            />
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default QuizModal;
