// Créer un composant Header dans lequel figurera le logo et trois boutons (s'inscrire, se connecter et vends tes articles ).
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";

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
}) => {
  // const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className="vinted-header">
      <Link to="/">
        <p>Vinted</p>
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
      />
      <div>
        {token === null ? (
          <>
            <Link to="/user/signup">S'inscrire</Link>
            <Link to="/user/login">Se connecter</Link>
          </>
        ) : (
          <button
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
          >
            Se déconnecter
          </button>
        )}

        <Link to="/publish">Vends tes articles</Link>
      </div>
    </div>
  );
};

export default Header;
