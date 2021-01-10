// import React, { useState, useEffect } from "react";
import "./Styles/Row.css";

function Row({ title, fetchUrl, isLargRow }) {
  // const [movies, setMovies] = useState([]);

  // A snipped of code that runs bassed on a specific condition/varialble. Dit is handig om series of films
  // // die wij willen weergeven kunnen fetchen naar binnen halen hij haalt de gegevens op vanuit de film database.
  // Zodra de row gaat laden dat trekt het gegevens vanuit de database. Use effect doet een verzoek aan idtm

  // useEffect(() => {
  // async function fetchData(){}
  // const request = await axios.get(fetchUrl);
  // setMovies(request.data.results);
  // return request;

  // fetchData();
  // }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* {movies.map(movie =>
                <img 
                key={movie.id}
                className={`row__poster ${isLargeRow &&"row__posterLarge"}`}
                src={`${base_url}
                
                ${isLargeRow ? movies.poster_path: movie.backdrop_path }`}
                
                alt={movie.name}/>
                ))} */}
      </div>
    </div>
  );
}

export default Row;
