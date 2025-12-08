import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (anchor) => (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      const element = document.getElementById(anchor);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#hero" onClick={handleAnchorClick("hero")}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleAnchorClick("services")}>
            Servicios
          </a>
        </li>
        <li>
          <a href="#why" onClick={handleAnchorClick("why")}>
            Por qué elegirnos
          </a>
        </li>
        <li>
          <Link to="/testimonials">Testimonios</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <a href="#contact" onClick={handleAnchorClick("contact")}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
