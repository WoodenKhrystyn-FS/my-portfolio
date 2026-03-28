import React from "react";

//Assets:
import wooden from "../public/assets/wooden.jpeg";

//Components
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Hero from "./Components/Hero.jsx";
import Contact from "./Components/Contact.jsx";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";

//Styles
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Navbar profileImage={wooden} />
        <main>
          <section>
            <container>
              <Hero />
            </container>
          </section>
          <section>
            <container>
              <About />
            </container>
          </section>
          <section>
            <container>
              <Skills />
            </container>
          </section>
          <section>
            <container>
              <Projects />
            </container>
          </section>
          <section>
            <container>
              <Contact />
            </container>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
