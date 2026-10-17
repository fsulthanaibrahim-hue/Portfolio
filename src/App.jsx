
import React from "react";
import Navbar from "./components/Navbar";
import LiquidCursor from "./components/LiquidCursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      {/* Global liquid cursor: render only once */}
      <LiquidCursor />

      {/* Navigation */}
      <Navbar />

      {/* Portfolio sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
