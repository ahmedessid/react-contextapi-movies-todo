// src/context/main.js
import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";
import ContextDevTool from "react-context-devtool";

export const MovieContext = createContext();
export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "20",
      id: nanoid()
    },
    {
      name: "Hunger Games",
      price: "60",
      id: nanoid()
    },
    {
      name: "Forgotten",
      price: "18",
      id: nanoid()
    }
  ]);

  const [state, setState] = useState({
    age: 16
  });

  const incrementAge = () => {
    setState({
      age: state.age + 1
    });
  };
  const decrementAge = () => {
    setState({
      age: state.age - 1
    });
  };
  const deleteMovie = id => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const addMovie = (id, name, price) => {
    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: id }
    ]);
  };

  const editMovie = (id, name, price) => {
    setMovies(
      movies.map(movie => {
        if (movie.id === id) {
          return { ...movie, name: name, price: price };
        }
        return movie;
      })
    );
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        state,
        incrementAge,
        decrementAge,
        deleteMovie,
        editMovie,
        addMovie
      }}
    >
      <ContextDevTool
        context={MovieContext}
        id="uniqContextId"
        displayName="Context Display Name"
      />
      {props.children}
    </MovieContext.Provider>
  );
};
