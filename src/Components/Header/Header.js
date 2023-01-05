import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../logo.jpg";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img className="logo" src={logo} alt="" />
        <div>
          <NavLink exact activeClassName="active" to="/home">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/reviews">
            Reviews
          </NavLink>
          <NavLink activeClassName="active" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink activeClassName="active" to="/blogs">
            Blogs
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
