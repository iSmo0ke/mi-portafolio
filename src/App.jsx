import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Navbar from "./components/Navbar";

function App(){
  return(
    <main className="bg-gray-900">
      <Navbar />

      <Hero/>
      <About/>
      <Projects/>
      <Certificates/>
      <Contact/>
    </main>
  );
}

export default App;