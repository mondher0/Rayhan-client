import "./SearchInput.css";
import { AiOutlineSearch } from "react-icons/ai";
const SearchInput = () => {
  return (
    <form className="search-input">
      <input type="text" placeholder="Serach Subject, Course, teacher" />
      <div className="search-icon">
        <button type="submit" className="hover">
          <AiOutlineSearch size={30} color="#fff" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
