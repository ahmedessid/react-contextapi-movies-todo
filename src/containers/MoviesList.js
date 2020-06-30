import React, { useContext } from "react";
import Movie from "../components/Movie";
import { MovieContext } from "../context/MovieContext";

const MoviesList = () => {
  const { movies, deleteMovie } = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie, index) => (
        <Movie
          name={movie.name}
          deleteMovie={deleteMovie}
          price={movie.price}
          id={movie.id}
          key={index}
        />
      ))}
    </div>
  );
};

export default MoviesList;
