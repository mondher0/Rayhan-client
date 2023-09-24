import "./SearchInput.css";
import { AiOutlineSearch } from "react-icons/ai";
const SearchInput = () => {
  return (
    <div className="search-input">
      <input type="text" placeholder="Serach Subject, Course, teacher" />
      <div className="search-icon">
        <AiOutlineSearch size={30} color="#fff" />
      </div>
    </div>
  );
};

export default SearchInput;
