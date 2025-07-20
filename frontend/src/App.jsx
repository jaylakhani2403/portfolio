import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Experience from './components/Achievements';
import Projects from './components/Project';
import Skills from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
     <>
       <Header/>
    <Router>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path='/achievements' element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
