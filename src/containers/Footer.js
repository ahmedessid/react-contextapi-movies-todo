import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Footer = () => {
  const { state } = useContext(MovieContext);
  return (
    <div>
      <h5> {state.age} </h5>
    </div>
  );
};

export default Footer;
