import "./PostReview.css";
import { AiFillStar } from "react-icons/ai";
import "../search-input/SearchInput.css";
import { BsFillSendFill } from "react-icons/bs";

const PostReview = () => {
  return (
    <section className="post-review">
      <div className="stars">
        <AiFillStar size={30} color="#FFD700" />
        <AiFillStar size={30} color="#FFD700" />
        <AiFillStar size={30} color="#FFD700" />
        <AiFillStar size={30} color="#FFD700" />
        <AiFillStar size={30} color="#FFD700" />
      </div>
      <form className="search-input">
        <input type="text" placeholder="Your comment here..." />
        <div className="search-icon">
          <button type="submit" className="send hover">
            <BsFillSendFill size={25} color="#fff" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default PostReview;
