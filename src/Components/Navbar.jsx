import { useState } from "react";
import "./Navbar.css";

function Navbar({ wooden }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={wooden} alt="Khrystyn Wooden" />
      </div>

      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>

      <button onClick={toggleMenu} className="menu-toggle">
        {menuOpen ? "Close" : "Menu"}
      </button>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#skills" onClick={toggleMenu}>
            Skills
          </a>
          {/* <a href="#contact" onClick={toggleMenu}>
            Contact
          </a> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
