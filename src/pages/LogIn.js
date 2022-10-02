import "../css/login.scss";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Cookies from "js-cookie";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://vinted-orion.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      // console.log("COOKIE", response.data.token);
      setUser(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-main">
      <h2>Se connecter</h2>

      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Adresse email"
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
        <input className="input-submit" type="submit" value="Se connecter" />
      </form>
      <Link to="/user/signup">Pas encore de compte ? Inscris-toi !</Link>
    </div>
  );
};

export default LogIn;
