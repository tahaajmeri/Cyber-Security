import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTerminal,
  FaBars,
  FaXmark
} from "react-icons/fa6";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Tools", path: "/tools" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="navbar-custom">

      <div className="container nav-container">

        <NavLink to="/" className="logo">
          <span className="logo-icon">
            <FaTerminal />
          </span>

          <span>
            NEON<span className="green">//</span>ROOT
          </span>
        </NavLink>


        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>


        <div className={`nav-links ${menuOpen ? "show" : ""}`}>

          {links.map((link) => (

            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              {link.name}
            </NavLink>

          ))}


          <NavLink
            to="/contact"
            className="nav-button"
            onClick={() => setMenuOpen(false)}
          >
            INITIALIZE
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;