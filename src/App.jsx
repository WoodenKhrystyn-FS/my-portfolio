import React from "react";
import khrys from "./assets/khrys.jpeg";

import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Hero from "./Components/Hero.jsx";
import Contact from "./Components/Contact.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";

import "./App.css";

function App() {
  return (
    <>
      {/* <div>
       <img src={khrys} alt="Khrystyn Wooden"/> 
    </div> */}
      <div className="app">
        <Navbar khrys={khrys} />
        <About />
        <Contact />
        <Hero />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

export default App;
