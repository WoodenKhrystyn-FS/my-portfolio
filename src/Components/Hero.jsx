import React from "react";
//import kvlogo from "../assets/wooden.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* <div className="hero-logo">
        <img src={kvlogo} alt="Khrystyn Wooden" className="hero-logo-img"/>
      </div> */}
      <div className="hero-content">
        <h1 className="hero-title">
          Turning Complex Ideas Into Scalable Applications
        </h1>
        <div>
          <h2 className="hero-subtitle">
            Full-Stack Web & Mobile Developer | UX-Driven | Backend-Strong
          </h2>
        </div>
        <div>
          <p className="hero-description">
            I build and design responsive, accessible, and user-friendly web
            applications powered by scalable APIs using{" "}
            <strong>React, Node.js, MongoDB and React Native</strong>. Focused
            on clean architectures, efficient code, and user
            experiences. I am always eager to learn new technologies and collaborate
            on innovative projects.
          </p>
        </div>

        <p className="hero-technologies">
          React | Vite | Node.js | MongoDB | Modern JavaScript | RESTful APIs |
          React Native | WordPress
        </p>
      </div>

      <p className="currently-building">
        <span>
          <strong>Current Builds :</strong>
          <ul>
            <li>
              Personal Portfolio Website to showcase my projects and skills
            </li>
            <li>React app during my Full Sail University degree journey</li>
            <li>
              Nail Booking System built with React and MongdoDB: PinkySwear
              Nails
            </li>
          </ul>
        </span>
      </p>

      
    </section>
  );
}

export default Hero;
