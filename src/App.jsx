import { useState } from "react";
import kvlogo from "./assets/wooden.jpeg";

import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Hero from "./Components/Hero.jsx";
import Contact from "./Components/Contact.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";

import "./App.css";

import kvlogo from "./assets/wooden.jpeg";
import "./App.css";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <About />
        <Hero kvlogo={kvlogo} />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
