import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>© 2025 Rithish D. All rights reserved.</p>
        <div className="social">
          <a href='https://github.com/rithish1224'><FontAwesomeIcon icon={faGithub} color='white' size='2x' className='icon'/></a>
          <a href='https://www.linkedin.com/in/rithish-d-576009311/'><FontAwesomeIcon color='white' icon={faLinkedin} size='2x' className='icon'/></a>
          <a href='https://www.instagram.com/rithish_12_'><FontAwesomeIcon color='white' icon={faInstagram} size='2x' className='icon'/></a>
        </div>
    </div>
  )
}

export default Footer