// import React, { useState, useEffect } from "react"
import React from "react";
// import api
//import request

function Banner() {
    // const { movie, setMovie } = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         // const request= await .get(request.fetchNetflixOriginal)
    //         // setMovie(
    //         //     request.data.results[
    //         //     Math.floor(Math.random() *request.data.results.length)
    //         //     ]

    //         // )
    //     }
    //     fetchData()
    // }, []);
    
    return (
        <header>
            {/* <div className="banner__contents"></div> */}
            {/* <h1>{movie?.title || movie?.name || movie?.original_name}</h1> */}
            <h3>Title</h3>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>

            
            
        </header>
    )
}

export default Banner
