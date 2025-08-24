import React from 'react'
import LogoLoop from './LogoLoop';
import './Skills.css'
import { SiReact,SiTailwindcss,SiPython,SiGithub,SiJavascript,SiBootstrap, SiVercel, SiHtml5, SiCss3,} from 'react-icons/si';

const techLogos = [
  { node: <SiReact color="#2b6ee2ff"/>, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss color="#1cccf4ff"/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython color="#3776AB"/>, title: "Python", href: "https://www.python.org/" },
  { node: <SiJavascript color="#e1e433ff"/>, title: "React", href: "https://react.dev" },
  { node: <SiGithub color="#fff7f7ff"/>, title: "Github", href: "https://github.com/" },
  { node: <SiBootstrap color="#b826edff"/>, title: "Bootstrap", href: "https://react.dev" },
  { node: <SiVercel color="#ffffffff"/>, title: "Vercel", href: "https://react.dev" },
  { node: <SiHtml5 color="#ef811aff"/>, title: "Vercel", href: "https://react.dev" },
  { node: <SiCss3 color="#1b63e0ff"/>, title: "Vercel", href: "https://react.dev" },
  
];
const Skills = () => {
  return (
    <div className='logo'>
      <LogoLoop className="loop"
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={60}
        gap={80}
        pauseOnHover
        fadeOut
        scaleOnHover
        fadeOutColor="#00212a"
        ariaLabel="Technology partners"
      />
    </div>
  )
}

export default Skills