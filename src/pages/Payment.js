import "../css/payment.scss";

import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ token }) => {
  const location = useLocation();
  const { title, price } = location.state;
  console.log(title, price);
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
            <CheckoutForm title={title} price={price} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
