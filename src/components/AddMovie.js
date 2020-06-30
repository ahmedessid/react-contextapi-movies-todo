import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { nanoid } from "nanoid";
import { Toast } from "react-bootstrap";

const AddMovie = ({ nameValue, priceValue, idValue, Submit, ButtonType }) => {
  const [name, setName] = useState(nameValue);
  const [price, setPrice] = useState(priceValue);
  const [id, setId] = useState(idValue);
  const { editMovie, addMovie } = useContext(MovieContext);
  const [toastShow, setToastShow] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
    setId(nanoid());
  };

  const handlePriceChange = e => {
    setPrice(e.target.value);
  };

  const handleAddSubmit = e => {
    e.preventDefault();
    if (name !== "" && price !== "") {
      addMovie(id, name, price);
      setName("");
      setPrice("");
      setId("");
    }
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    if (name !== "" && price !== "") {
      editMovie(idValue, name, price);
      setToastShow(true);
    }
  };

  return (
    <div>
      <form onSubmit={Submit === "Submit" ? handleAddSubmit : handleEditSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Movie name"
          required
          pattern="[A-Za-z 0-9]*"
          className="form-control"
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Movie price"
          required
          pattern="[0-9]*"
          className="form-control"
          onChange={handlePriceChange}
        />
        <button className={ButtonType}>{Submit}</button>
      </form>
      <p />
      <Toast
        onClose={() => setToastShow(false)}
        show={toastShow}
        delay={2000}
        autohide
        className="toastStyle"
      >
        <Toast.Body>Updated Succefully!</Toast.Body>
      </Toast>
    </div>
  );
};

export default AddMovie;
