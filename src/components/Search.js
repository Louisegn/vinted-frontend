// ?title=&priceMin&priceMax&sort&skip&limit
// import { Range } from "react-range";

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
    <div>
      <input
        type="text"
        placeholder="Recherche des articles"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          //   event.preventDefault();
        }}
      />
      <input
        type="checkbox"
        value={sort}
        onChange={() => {
          setSort(!sort);
        }}
      />
    </div>
  );
};

export default Search;
