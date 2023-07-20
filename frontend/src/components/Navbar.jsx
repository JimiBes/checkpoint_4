import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import "../styles/Navbar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Logo" />

      <div className="buttons">
        <NavLink to="/stones" activeClassName="active" exact="true">
          <button type="button" className="nav-button">
            Pierres Naturelles
          </button>
        </NavLink>
        <NavLink to="/creations" activeClassName="active">
          <button type="button" className="nav-button">
            Créations Artistiques
          </button>
        </NavLink>
      </div>
      <p className="nav-footer">v. 1.0</p>
    </div>
  );
}

export default NavBar;
