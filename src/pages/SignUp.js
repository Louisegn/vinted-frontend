import "../css/signup.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
      const response = await axios.post("http://localhost:3000/user/signup", {
        email: email,
        username: name,
        password: password,
        newsletter: newsletter,
      });
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
    <div className="signup-main">
      <h2>S'inscrire</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Nom d'utilisateur"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          className="input-text"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="input-text"
          type="text"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <div className="input-check">
          <input
            type="checkbox"
            onChange={() => {
              setNewsletter(!newsletter);
            }}
          />
          <p>S'inscrire à notre newsletter</p>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>

        <input className="signup-submit" type="submit" value="S'inscrire" />
        <p>{errorMessage}</p>
      </form>
      <Link to="/user/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
};

export default SignUp;
