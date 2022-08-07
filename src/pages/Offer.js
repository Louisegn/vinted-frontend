import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/offer.scss";
import { Link } from "react-router-dom";

// price
// marque taille etat couleur emplacement
// ---------------------------
// product_name
// commentaire
// user_name

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.meassage);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="offer-main">
      <div className="offer-container">
        <img className="img-offer" src={data.product_image.secure_url} alt="" />
        <div className="info-container">
          <div className="price">
            <p>{data.product_price}</p>
          </div>

          <div className="product-info">
            {data.product_details.map((elem, index) => {
              const keys = Object.keys(elem);
              return (
                <div>
                  <p key={index}>{keys[0]}</p>
                  <p>{elem[keys[0]]}</p>
                </div>
              );
            })}
          </div>
          <div className="div-border"></div>
          <div className="div2">
            <p className="p1">{data.product_name}</p>

            <p className="p2">{data.product_description}</p>
            <p>{data.owner.account.username}</p>
            <Link
              to="/payment"
              state={{ title: data.product_name, price: data.product_price }}
            >
              Acheter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
