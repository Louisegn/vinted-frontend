import "../css/signup.scss";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";

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
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
    setAvatar(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setErrorMessage("");

      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("email", email);
      formData.append("username", name);
      formData.append("password", password);
      formData.append("newsletter", newsletter);

      const response = await axios.post(
        "https://vinted-orion.herokuapp.com/user/signup",
        // "http://localhost:3000/user/signup",
        formData
        // {
        //   email: email,
        //   username: name,
        //   password: password,
        //   newsletter: newsletter,
        // }
      );
      if (response.data) {
        // console.log("yeeeesss");
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
        <div>
          {avatar === null ? (
            <div className="drop-zone--div">
              <div {...getRootProps({ className: "dropzone" })}>
                <input className="input-zone" {...getInputProps()} />
                <div className="text-center">
                  <p className="dropzone-content">+ Ajouter une photo</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="img-container">
              <img
                className="preview"
                src={preview}
                style={{ width: "200px" }}
                alt=""
              />
              <button
                onClick={() => {
                  setAvatar(null);
                }}
              >
                Supprimer la photo
              </button>
            </div>
          )}
        </div>
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
