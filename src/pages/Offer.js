import { useParams } from "react-router-dom";

const Offer = ({ data }) => {
  const { id } = useParams();
  // console.log(id);
  // console.log(data);
  //   const test = data.find((elem) => data.offers._id === { id });
  //   console.log(test);
  return (
    <div className="item-container">
      {/* <div>Product id : {id}</div> */}
      {data.offers.map((elem, index) => {
        if (elem._id === id) {
          return (
            <div className="item-info">
              <img
                className="img-offer"
                src={elem.product_pictures[0].secure_url}
                alt=""
              />
              <div className="product-info">
                <p>{elem.product_price}</p>
              </div>
            </div>
          );
        } else return null;
      })}
    </div>
  );
};

export default Offer;
