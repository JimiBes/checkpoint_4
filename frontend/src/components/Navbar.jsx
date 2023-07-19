import React from "react";
import Logo from "../assets/Logo.jpg";
import "../styles/Navbar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="Logo" />

      <div className="buttons">
        <button type="button" className="nav-button">
          Pierres Naturelles
        </button>
        <button type="button" className="nav-button">
          Créations Artistiques
        </button>
      </div>
      <p className="nav-footer">v. 1.0</p>
    </div>
  );
}

export default NavBar;
