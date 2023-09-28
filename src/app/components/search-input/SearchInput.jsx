import { useTranslations } from "next-intl";
import "./SearchInput.css";
import { AiOutlineSearch } from "react-icons/ai";
const SearchInput = () => {
  const t = useTranslations("afterLogin");
  return (
    <form className="search-input">
      <input type="text" placeholder={t("search")} />
      <div className="search-icon">
        <button type="submit" className="hover">
          <AiOutlineSearch size={30} color="#fff" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
