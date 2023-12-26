"use client";
import { useTranslations } from "next-intl";
import "./SearchInput.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";
const SearchInput = () => {
  const t = useTranslations("afterLogin");
  const router = useRouter();
  const [search, setSearch] = useState("");

  // handle search
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`courses?page=1&q=${search}`);
  };
  return (
    <form className="search-input" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder={t("search")}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="search-icon">
        <button type="submit" className="hover">
          <AiOutlineSearch size={30} color="#fff" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
