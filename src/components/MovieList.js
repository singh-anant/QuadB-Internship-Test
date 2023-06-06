import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {
    getMovieData();
  }, []);

  async function getMovieData() {
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const json = await data.json();
    console.log(json);
    // console.log(json[0]);
    setAllMovies(json);
  }

  if (!allMovies) return null;

  return (
    <div className="movies-list">
      {allMovies.map((movie) => {
        return (
          <Link
            style={{
              textDecoration: "none",
              color: "#388087",
            }}
            to={"/movie/" + movie.show.id}
          >
            <MovieCard {...movie?.show} key={movie?.show.id} />;
          </Link>
        );
      })}
    </div>
  );
};

export default MovieList;
