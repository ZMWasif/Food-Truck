import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../logo.jpg";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img className="logo" src={logo} alt="" />
        <div>
          <Link to="/home">Home</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
