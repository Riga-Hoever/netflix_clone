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
        <Link style={{ textDecoration:'none' }}>
          <li>Home</li>
        </Link>
        <Link style={{ textDecoration:'none' }}>
          <li>Series</li>
        </Link>
        <Link style={{ textDecoration:'none' }}>
          <li>Films</li>
        </Link>
        <Link style={{ textDecoration:'none' }}>
          <li>Trending</li>
        </Link>
        <Link style={{ textDecoration:'none' }}>
          <li>My List</li>
        </Link>
        <Link style={{ textDecoration:'none' }}>
          <li>History</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
