import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

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
        return <MovieCard {...movie?.show} key={movie?.show.id} />;
      })}
    </div>
  );
};

export default MovieList;
