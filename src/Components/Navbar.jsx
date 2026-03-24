import { useState } from "react";
import "./Navbar.css";

function Navbar({ profileImage }) {
  const [menuOpen, setMenuOpen] = useState(false);

 

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
        <img src={profileImage} alt="Khrystyn Wooden" />
      </div>

      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="menu-toggle">
        {menuOpen ? "Close" : "Menu"}
      </button>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
      </div>
    </nav>
  );
}

export default Navbar;
