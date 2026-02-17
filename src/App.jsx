import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

import kvlogo from "./assets/kv.JPG";
import "./App.css";

function App() {
  return (
    <>
      <h1>Khrystyn Wooden</h1>
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
