import React from "react";
import "./App.css";

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
        <li>Home</li>
        <li>Series</li>
        <li>Films</li>
        <li>Trending</li>
        <li>My List</li>
        <li>History</li>
      </ul>
    </div>
  );
}

export default Navbar;
