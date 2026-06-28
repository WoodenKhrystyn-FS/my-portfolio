import React from "react";
import profileImg from "../assets/wooden.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero section">
      <div className="hero-container">
        {/* LEFT SIDE */}
        <div className="hero-left">
          <div className="status-pill">
            🚀 Currently Building: Three Little Ladies Bakery
          </div>

          <p className="hero-intro">Hi, I'm</p>

          <h1 className="hero-name">
            Khrystyn <span className="hero-highlight">Wooden</span>
          </h1>

          <h1 className="hero-title">
            Designing intuitive experiences and building scalable web
            applications.
          </h1>

          <h2 className="hero-subtitle">
            UX-Focused Full-Stack Developer React • JavaScript • Node.js •
            MongoDB
          </h2>

          <p className="hero-description">
            I'm a UX-focused Full-Stack Developer who enjoys creating
            responsive, accessible and high-performance application using React,
            Node.js and modern JavaScript.
          </p>

          <p>
            ✨ Open to Full-Stack, Frontend, and UX-focused Software Development
            opportunities.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="Khrystyn Wooden" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
