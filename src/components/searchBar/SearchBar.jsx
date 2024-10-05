import { useState } from "react";
import "./searchbar.scss";
import searchIcon from "/search.png";

const TYPES = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchbar">
      <div className="type">
        {TYPES.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : " "}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="locaiton" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src={searchIcon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
