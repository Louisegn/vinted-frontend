// ?title=&priceMin&priceMax&sort&skip&limit
import "../css/search.scss";
import Slide from "./Slide";

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
  setRangeValues,
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
          {/* <p>Trier par prix: </p>
          <input
            className="input-check"
            type="checkbox"
            value={sort}
            onChange={() => {
              setSort(!sort);
            }}
          /> */}
          <span style={{ marginRight: 10 }}>Trier par prix : </span>
          <span className="checkbox">
            <input
              type="checkbox"
              checked={sort}
              onChange={() => {}}
              name="price"
            />
            <div
              className="wrapper"
              onClick={() => {
                setSort(!sort);
              }}
            >
              <div className="knob">
                <span>{sort ? "⇣" : "⇡"}</span>
              </div>
            </div>
          </span>
        </div>
        <Slide setRangeValues={setRangeValues} />
      </div>
    </div>
  );
};

export default Search;
