import { useState, useCallback } from "react";
import "../css/publish.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const Publish = ({ token }) => {
  //   const [data, setData] = useState();
  const navigate = useNavigate();

  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
    setPicture(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
  });
  // console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("HEYYY", token);
    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);

    try {
      const response = await axios.post(
        "http://localhost:3000/offer/publish",
        formData,
        {
          headers: {
            authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/");
      alert("good");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="publish-main">
      <button
        onClick={() => {
          console.log(acceptedFiles[0]);
        }}
      ></button>
      <div className="publish-container">
        <h2>Vends ton article</h2>
        <form className="publish-form" onSubmit={handleSubmit}>
          <div className="div-container file-container">
            {picture === null ? (
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
                    setPicture(null);
                  }}
                >
                  Supprimer la photo
                </button>
              </div>
            )}
          </div>

          <div className="div-container title-descript">
            <div className="form-container">
              <p>Titre</p>
              <input
                className="input-text"
                type="text"
                placeholder="ex: Chemise Sezane verte"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="form-container descript">
              <p>Décris ton article</p>
              <input
                className="input-text "
                type="text"
                placeholder="ex: porté quelquefois, taille correctement"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="div-container others">
            <div className="form-container">
              <p>Marque</p>
              <input
                className="input-text"
                type="text"
                placeholder="ex: Zara"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>

            <div className="form-container">
              <p>Taille</p>
              <input
                className="input-text"
                type="text"
                placeholder="ex: L/40/12"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>

            <div className="form-container">
              <p>Couleur</p>
              <input
                className="input-text"
                type="text"
                placeholder="ex: Fushia"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>

            <div className="form-container">
              <p>Etat</p>
              <input
                className="input-text"
                type="text"
                placeholder="ex: Neuf avec étiquette"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>

            <div className="form-container">
              <p>Lieu</p>
              <input
                className="input-text"
                type="text"
                placeholder="ex: Paris"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="div-container">
            <div className="form-container">
              <p>Prix</p>
              <input
                className="input-text"
                type="text"
                placeholder="0,00 €"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div className="form-container">
              <div className="input-checkbox">
                <div>
                  <input type="checkbox" />
                  <p>Je suis intéressé(e) par les échanges</p>
                </div>
              </div>
            </div>
          </div>

          <input className="input-submit" type="submit" value="Ajouter" />
        </form>
      </div>
    </div>
  );
};

export default Publish;
