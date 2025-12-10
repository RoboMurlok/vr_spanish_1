import React, { useState } from "react";
import { Link } from "react-router-dom";
import { buildCount } from "../../../count.js";
import { siteName } from "../../../siteName";
import { navbarLinks } from "../../db/navbar.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

    let brendName = "";

    if (buildCount > siteName.length) {
      brendName = "";
    } else {
      brendName = siteName[buildCount].split(".")[0];
    }

  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <div className="icons-logo">
          <div className="logo"></div>
          <div className="logo"></div>
          <div className="logo"></div>
        </div>
        <h2>{brendName}</h2>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        {navbarLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </div>
    </nav>
  );
}
