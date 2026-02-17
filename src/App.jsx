import { useState } from "react";
import kvlogo from "./assets/kv.JPG";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <>
      <h1>Khrystyn Wooden</h1>
      <div className="app">
        <Navbar />
        <About />
        <Hero logo={kvlogo} />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
