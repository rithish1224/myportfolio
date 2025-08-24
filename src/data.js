import newegg from '../src/assets/projects/newegg.png'
import todo from './assets/projects/todo.png'
import newsify from './assets/projects/newsify.png'
import carcare from './assets/projects/carcare.png'

const projects =[
    {
        id: 1,
        image: newegg,
        git: "https://github.com/rithish1224/Newegg",
        live: "https://rithish1224.github.io/Newegg/",
        tech: ["Html","Css","Bootstrap"],
        description:"A E-commerce Clone of NewEgg"
    },
    {
        id: 2,
        image: todo,
        git: "https://github.com/rithish1224/TO-DO-LIST",
        live: "https://github.com/rithish1224/TO-DO-LIST/",
        tech: ["Html","Css","Javascript"],
        description:"A Simple to-do-list website"
    },
    {
        id: 3,
        image: newsify,
        git: "https://github.com/rithish1224/Newsify",
        live: "https://newsify-78j0554xi-rithish1224s-projects.vercel.app/",
        tech: ["Reatc Js","Api","Router"],
        description:"A react news app with api integration"
    },
    {
        id: 4,
        image: carcare,
        git: "https://github.com/rithish1224/Car-Care",
        live: "https://rithish1224.github.io/Car-Care/",
        tech: ["Html","Css","Bootstrap"],
        description:"A landing page for a car mechanic shop"
    },
]
export default projects