import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ title, price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [valid, setValid] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement);

      const stripeToken = stripeResponse.token.id;

      console.log(stripeResponse);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: "titre",
          amount: 10,
        }
      );
      if (response.data.status === "succeeded") {
        console.log("Payment confirmé");
        setValid(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {valid ? (
        <h1>Paiement confirmé !</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="checkout-form">
            <CardElement />
          </div>
          <input type="submit" value="Payer" />
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
