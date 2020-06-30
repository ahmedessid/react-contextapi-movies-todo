import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Header = () => {
  const { movies, state, incrementAge, decrementAge } = useContext(
    MovieContext
  );
  return (
    <div>
      <h4>List of movies: {movies.length}</h4>
      <h5> {state.age} </h5>
      <div className="_buttons">
        <button className="btn btn-light" onClick={incrementAge}>
          Increment
        </button>
        <button className="btn btn-light" onClick={decrementAge}>
          Decrement
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Header;
