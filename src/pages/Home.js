import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ title, priceMin, priceMax, sort, skip, limit }) => {
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
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${title}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${value}&skip=${skip}&limit=${limit}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, [title, priceMin, priceMax, sort, skip, limit]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="home-container">
      <div>
        {data.offers.map((elem, index) => {
          return (
            <div key={index} className="items">
              <Link to={`/offer/${elem._id}`}>
                <h2>{elem.product_name}</h2>
                <img
                  className="img-items"
                  src={elem.product_image.secure_url}
                  alt=""
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
