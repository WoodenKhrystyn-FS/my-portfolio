import React from "react";
//import kvlogo from "../assets/wooden.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Khrystyn Wooden</h1>

        <h2 className="hero-subtitle">UX-Focused Full-Stack Developer</h2>

        <p className="hero-tagline">
          Turning Complex Ideas Into Scalable Applications
        </p>

        <p className="hero-description">
          I build scalable, user-focused web and mobile applications using
          modern technologies.
        </p>
        <div className="hero-links">
          <a href="#projects">View My Work</a>
          <a href="#contact">Contact Me</a>
        </div>

        {/* <p className="hero-technologies">
          React | Vite | Node.js | MongoDB | Modern JavaScript | RESTful APIs |
          React Native | WordPress
        </p> */}
      </div>

      <div className="currently-building">
        <strong>Current Builds :</strong>
        <ul>
          <li>Personal Website</li>
          <li>React App(Full Sail)</li>
          <li>Nail Booking System (PinkySwear Nails)</li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
