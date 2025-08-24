import React from 'react'
import './Projects.css'
import SpotlightCard from './SpotlightCard';
import projects from '../data';
import { SiGithub } from 'react-icons/si';
import { CiShare1 } from "react-icons/ci";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
  return (
    <div className='pro-container'>
        <h1>Projects</h1>
        <div className="pro-card">
                   {
        projects.map((project)=>{
            return(
               <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)" key={project.id}>  
               <img className='pro-image' src={project.image}/>
                
               <div className="pro-link">
               <a href={project.git} className='pro-git'><button><FontAwesomeIcon icon={faGithub}  className='git'/> <span className='code'>Code</span></button></a>
               <a href={project.live} className='pro-live'><button ><FontAwesomeIcon icon={faArrowRight} className='live'/><span className='demo'>Demo</span></button></a>
               </div> 
               <p className='pro-desc'>{project.description}</p>
               <ul className='list'>
                {project.tech.map((techItem, index) => (
                <li key={index}>#{techItem}</li>
                ))}
                </ul>      
        </SpotlightCard> 
            );
        })}
        </div> 
    </div>
  )
}

export default Projects