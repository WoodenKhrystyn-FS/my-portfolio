import React from "react";
import profileImg from "../assets/wooden.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="hero-title">
            Building Scalable & User-Focused Web Applications
          </h1>

          <h2 className="hero-subtitle">
            Full-Stack Developer | React • Node • MongoDB
          </h2>

          <p className="hero-description">
            I design and develop responsive, high-performance applications
            with clean architecture and intuitive user experiences.
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