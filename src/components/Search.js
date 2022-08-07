// ?title=&priceMin&priceMax&sort&skip&limit
// import { Range } from "react-range";
import "../css/search.scss";

const Search = ({
  title,
  setTitle,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  sort,
  setSort,
  skip,
  setSkip,
  limit,
  setLimit,
}) => {
  return (
    <div className="search-container">
      <div className="top-part">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="input-text"
          type="text"
          placeholder="Recherche des articles"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            //   event.preventDefault();
          }}
        />
      </div>

      <div className="bottom-part">
        <div className="sort-part">
          <p>Trier par prix: </p>
          <input
            className="input-check"
            type="checkbox"
            value={sort}
            onChange={() => {
              setSort(!sort);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
