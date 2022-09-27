import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/home.scss";
import "../css/font.css";
import banner from "../assets/img/banner.jpeg";
import tear from "../assets/img/tear.svg";

const Home = ({
  title,
  priceMin,
  priceMax,
  sort,
  skip,
  limit,
  token,
  rangeValues,
}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let value = "";
        if (sort === true) {
          value = "price-asc";
        } else {
          value = "price-desc";
        }
        const response = await axios.get(
          `http://localhost:3000/offers?title=${title}&priceMin=${rangeValues[0]}&priceMax=${rangeValues[1]}&sort=${value}&skip=${skip}&limit=${limit}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, [title, priceMin, priceMax, sort, skip, limit, rangeValues]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="home-main">
      <div className="banner-div">
        <img className="banner" src={banner} alt="" />
        <img className="tear" src={tear} alt="" />
      </div>

      <div className="mini-container">
        <p>Prêts à faire du tri dans vos placards ?</p>
        <div className="articles-button">
          {token === null ? (
            <Link to="/user/login">
              <div className="butt">Vends tes articles</div>
            </Link>
          ) : (
            <Link to="/publish">
              <div className="butt">Vends tes articles</div>
            </Link>
          )}
        </div>
      </div>
      <div className="home-container">
        {data.offers.map((elem, index) => {
          return (
            <div key={index} className="items">
              <Link to={`/offer/${elem._id}`}>
                <p className="p-user">{elem.owner.account.username}</p>
                <img
                  className="img-items"
                  src={elem.product_image.secure_url}
                  alt=""
                />
                <p className="p-price">{elem.product_price} €</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
