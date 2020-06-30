import React from "react";
import AddMovie from "./AddMovie";

const EditMovie = props => {
  return (
    <div>
      <AddMovie
        nameValue={props.name}
        priceValue={props.price}
        idValue={props.id}
        ButtonType="btn btn-success"
        Submit="Update"
      />
    </div>
  );
};

export default EditMovie;
