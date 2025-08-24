import React from 'react'
import './Navbar.css'
import GlareHover from './GlareHover'

const Navbar = ({refs}) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className='nav-container'>
        <div className="nav-left">
            <h2>Portfolio</h2>
        </div>
        <div className="nav-right">
        <h3 className='tag' onClick={() => scrollToSection(refs.homeRef)}>Home</h3>
        <h3 className='tag' onClick={() => scrollToSection(refs.projectsRef)}>Projects</h3>
        <h3 className='tag' onClick={() => scrollToSection(refs.footerRef)}>Contact</h3>
             <GlareHover
                glareColor="#10a3ffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={900}
                playOnce={false}
            ><h3><a>Resume</a></h3></GlareHover>
        </div>
    </div>
  )
}

export default Navbar