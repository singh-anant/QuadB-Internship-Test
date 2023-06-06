import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AiFillStar } from "react-icons/ai";

const MovieDecription = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const [info, setInfo] = useState();
  useEffect(() => {
    getMovieInfo();
  }, []);

  async function getMovieInfo() {
    const data = await fetch("https://api.tvmaze.com/shows/" + id);
    const json = await data.json();
    console.log(json?.summary);
    setInfo(json?.summary);
    setMovieInfo(json);
  }
  return (
    <div className="desciption">
      <div className="m-img">
        <img src={movieInfo?.image?.original} alt="image" />
      </div>
      <div className="m-wrap1">
        <h1 className="m-name">{movieInfo?.name}</h1>
        <div className="m-wrap2">
          <h2 className="m-language">{movieInfo?.language}</h2>
          <h2 className="m-genres">{movieInfo?.genres.join(",")}</h2>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: info }}
          className="m-summary"
        ></div>
        <div className="m-wrap3">
          <h2 className="m-status">
            <span className="m-span">Status-</span>
            {movieInfo?.status}
          </h2>
          <h2 className="m-runtime">
            <span className="m-span">Duration-</span>
            {movieInfo?.runtime} min
          </h2>
        </div>
        <div className="m-wrap4">
          <h2 className="m-premiered">
            <span className="m-span">Premiered-</span>
            {movieInfo?.premiered}
          </h2>
          {movieInfo?.status == "Ended" ? (
            <h2 className="m-ended">
              <span className="m-span">Ended-</span>
              {movieInfo?.ended}
            </h2>
          ) : (
            <></>
          )}
        </div>
        <div className="m-wrap5">
          <h2 className="m-rating">
            <span className="m-span">Rating-</span>
            {movieInfo?.rating?.average}
            <AiFillStar style={{ color: "#388087" }} />
          </h2>

          <h2 className="m-type">
            <span className="m-span">Type-</span>
            {movieInfo?.type}
          </h2>
        </div>
        {/* <h2 className="m-schedule">{movieInfo?.shedule}</h2> */}
        <div className="m-wrap6">
          <button className="m-url">
            <a href={movieInfo?.url} />
            URL
            {/* </a> */}
          </button>
          <button className="m-off">
            <a href={movieInfo?.url} />
            Official Site
            {/* </a> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDecription;
