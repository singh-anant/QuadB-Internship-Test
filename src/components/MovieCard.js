import React from "react";

const MovieCard = ({ image, name, genres, rating }) => {
  return (
    <div className="card">
      <img src={image?.medium} alt="image" />
      <h2 className="c-name">{name}</h2>
      <div className="c-genres">{genres.join(",")}</div>
    </div>
  );
};

export default MovieCard;
