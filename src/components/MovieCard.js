import React from "react";
import { AiFillStar } from "react-icons/ai";

const MovieCard = ({ image, name, genres, rating }) => {
  return (
    <div className="card">
      <img className="c-img" src={image?.medium} alt="image" />
      <div className="c-wrap">
        <h2 className="c-name">{name}</h2>

        <h4 className="c-rating">
          <AiFillStar style={{ color: "#388087" }} />
          {rating?.average}
        </h4>
      </div>
      <div className="c-genres">{genres.join(",")}</div>
    </div>
  );
};

export default MovieCard;
