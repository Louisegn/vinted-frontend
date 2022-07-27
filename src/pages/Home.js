import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <div className="home-container">
      <div>
        {data.offers.map((elem, index) => {
          return (
            <div key={index} className="itemss">
              <Link to={`/offer/${elem._id}`}>
                <img
                  className="img-items"
                  src={elem.product_pictures[0].secure_url}
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
