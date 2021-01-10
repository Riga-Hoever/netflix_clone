import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav_style">
      <div className="logo">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Logo"
        />
      </div>

      <ul className="links">
        <Link to = "/home" >
          <li>Home</li>
        </Link>
        <Link to = "/series">
          <li>Series</li>
        </Link>
        <Link to = "/films" >
          <li>Films</li>
        </Link>
        <Link to = "/trending">
          <li>Trending</li>
        </Link>
        <Link to = "/MyList">
          <li>My List</li>
        </Link>
        
      </ul>
    </div>
  );
}

export default Navbar;
