import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { useRef } from 'react';

const App = () => {
   const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <div>
      <Navbar refs={{ homeRef, projectsRef, footerRef }} />
      <div ref={homeRef}><Hero /></div>
      <Skills />
      <div ref={projectsRef}><Projects /></div>
      <div ref={footerRef}><Footer /></div>
    </div>
  )
}

export default App