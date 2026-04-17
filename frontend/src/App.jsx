import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Home from './components/Home';
import Experience from './components/Achievements';
import Projects from './components/Project';
import Skills from './components/Skill';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Certifications />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
