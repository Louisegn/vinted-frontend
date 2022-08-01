import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Cookies from "js-cookie";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      // console.log("COOKIE", response.data.token);
      setUser(response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adresse email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholde="Mot de passe"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" value="Se connecter" />
      </form>
      <Link to="/user/signup">Pas encore de compte ? Inscris-toi !</Link>
    </div>
  );
};

export default LogIn;
