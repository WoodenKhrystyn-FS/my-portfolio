import { useState } from "react";
import kvlogo from "./assets/wooden.jpeg";
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
