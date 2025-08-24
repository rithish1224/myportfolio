import React from 'react'
import './Hero.css'
import Typewriter from 'typewriter-effect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'lottie-react'
import Developer from '../assets/developer skills.json'


const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="left-hero">
            <h3>Hello,It's Me</h3>
            <h1>Rithish D</h1>
            <div className="typing">
                <h2>I'm a</h2>
                <span className='typer'><Typewriter  options={{strings: ['Web Developer', 'Programmer','Software Engineer'],autoStart: true,loop: true,}}/></span>
            </div>
            <div className="about">
              <p>I'm a passionate web developer who turns ideas into elegant, functional solutions. <br />I build robust and scalable web applications</p>
            </div>
            <div className="social">
                      <a href='https://github.com/rithish1224'><FontAwesomeIcon icon={faGithub} size='2x' className='icon' color='white'/></a>
                      <a href='https://www.linkedin.com/in/rithish-d-576009311/'><FontAwesomeIcon icon={faLinkedin} size='2x' color='white' className='icon'/></a>
                      <a href='https://www.instagram.com/rithish_12_'><FontAwesomeIcon icon={faInstagram} size='2x'  color='white' className='icon'/></a>
                    </div>
        </div>
        <div className="right-hero">
          <Lottie animationData={Developer}/>
        </div>
    </div>
  )
}

export default Hero