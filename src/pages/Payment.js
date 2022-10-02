import "../css/payment.scss";

import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LdDZKHKnXW3CDijG5fvmdDImj5DG4IH5GSpwyWGKAzNCu0Gw9liSi1zFOAbRKBgMRLN2KPT18kszxCFgIA9JFiZ005aLw9uri"
);

const Payment = ({ token }) => {
  const location = useLocation();
  const { title, price, product_id } = location.state;
  // console.log(title, price);
  return (
    <div className="payment-main">
      <div className="payment-container">
        <div className="top-payment-form">
          <p>Résumé de la commande</p>
          <div>
            <span>Commande</span>
            <span>10 €</span>
          </div>
          <div>
            <span>Frais protection acheteurs</span>
            <span> 1.00 €</span>
          </div>
          <div>
            <span>Frais de port</span>
            <span>2 €</span>
          </div>
        </div>
        <div className="separator"></div>
        <div className="mid-payement-form">
          <div>
            Total<span> 13 €</span>
          </div>
          <p>Il ne vous reste plus qu'un étape pour vous offrir {title}</p>
        </div>
        <div className="separator"></div>
        <div className="payment-card">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              product_title={title}
              price={price}
              product_id={product_id}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
