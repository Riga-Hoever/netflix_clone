import React, { useState, useEffect } from "react";
import axios from "../requests/axios";
import requests from "../requests/requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie ] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
 
  return (
    <header className="banner">
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition:"center center",
      }}
      <div className="banner__contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>

          <h1 className="banner__description">{movie?.overview}</h1>
        </div>
      </div>
    </header>
  );
}

export default Banner;
