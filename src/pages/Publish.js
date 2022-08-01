import { useState } from "react";
import "../css/publish.scss";
import axios from "axios";

const Publish = ({ token }) => {
  //   const [data, setData] = useState();

  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("HEYYY", token);
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
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("RESPONSE", response.data);
      //   setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="publish-container">
      <form className="publish-form" onSubmit={handleSubmit}>
        {/* <label for="img_upload">Ajouter une photo</label> */}
        <input
          type="file"
          onChange={(event) => {
            // console.log(event.target.files[0]);
            setPicture(event.target.files[0]);
          }}
        />
        <div>
          <p>Titre</p>
          <input
            type="text"
            placeholder=""
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div>
          <p>Décris ton article</p>{" "}
          <input
            type="text"
            placeholder=""
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Marque</p>
          <input
            type="text"
            placeholder=""
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
        </div>

        <div>
          <p>Taille</p>
          <input
            type="text"
            placeholder=""
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
        </div>

        <div>
          <p>Couleur</p>
          <input
            type="text"
            placeholder=""
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
        </div>

        <div>
          <p>Etat</p>
          <input
            type="text"
            placeholder=""
            value={condition}
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
        </div>

        <div>
          <p>Lieu</p>
          <input
            type="text"
            placeholder=""
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
        </div>

        <div>
          <p>Prix</p>
          <input
            type="text"
            placeholder=""
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
};

export default Publish;
