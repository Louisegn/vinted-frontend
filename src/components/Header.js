import "../css/header.scss";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import logo from "../assets/logo.svg";

const Header = ({
  token,
  setUser,
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
  rangeValues,
  setRangeValues,
}) => {
  // const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className="header-main">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <Search
        title={title}
        setTitle={setTitle}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        sort={sort}
        setSort={setSort}
        skip={skip}
        setSkip={setSkip}
        limit={limit}
        setLimit={setLimit}
        setRangeValues={setRangeValues}
      />
      <div>
        <div className="right-part">
          {token === null ? (
            <>
              <div className="button">
                <Link to="/user/signup">S'inscrire</Link>
              </div>
              <div className="button">
                <Link to="/user/login">Se connecter</Link>
              </div>
            </>
          ) : (
            <button
              className="logout"
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          )}
          <div className="articles-button">
            {token === null ? (
              <Link to="/user/login">Vends tes articles</Link>
            ) : (
              <Link to="/publish">Vends tes articles</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
