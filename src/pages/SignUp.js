import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// "email": "johndoe@lereacteur.io",
// "username": "JohnDoe",
// "password": "azerty",
// "newsletter": true

const SignUp = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage("");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: name,
          password: password,
          newsletter: newsletter,
        }
      );
      if (response.data) {
        console.log("yeeeesss");
        setUser(response.data.token);
        navigate("/");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="checkbox"
          onChange={() => {
            setNewsletter(!newsletter);
          }}
        />
        <input type="submit" value="S'inscrire" />
        <p>{errorMessage}</p>
      </form>
    </div>
  );
};

export default SignUp;
