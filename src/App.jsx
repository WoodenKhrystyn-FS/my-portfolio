import { useState } from "react";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./App.css";

function App() {
  return (
    <>
      <h1>Khrystyn Wooden</h1>
      <div className="app">
        <Navbar />
        <About />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
