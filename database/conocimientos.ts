import { 
    faAngular, 
    faBootstrap, 
    faCss3Alt, 
    faGitAlt, 
    faGithub, 
    faHtml5, 
    faJs, 
    faNodeJs, 
    faPython, 
    faReact, 
    faSass 
} from "@fortawesome/free-brands-svg-icons";
import { IConocimientos } from "../interface/conocimientos";

export const conocimientosDB: IConocimientos[] = [
    {
        id: 1,
        type: "icon",
        file: faHtml5,
        title: "HTML",
        color: "#FFB800",
        stack: "front"
    },
    {
        id: 2,
        type: "icon",
        file: faCss3Alt,
        title: "CSS3",
        color: "#2457C5",
        stack: "front"
    },
    {
        id: 3,
        type: "icon",
        file: faBootstrap,
        title: "Bootstrap",
        color: "#673AB7",
        stack: 'front'
    },
    {
        id: 4,
        type: "icon",
        file: faSass,
        title: "Sass",
        color: "#F06292",
        stack: 'front'
    },
    {
        id: 5,
        type: "icon",
        file: faJs,
        title: "JavaScript",
        color: "#EBC351",
        stack: 'front'
    },
    {
        id: 8,
        type: "img",
        file: "/icons/ts.svg",
        title: "Typescript",
        color: "#5686E1",
        stack: 'front'
    },
    {
        id: 6,
        type: "icon",
        file: faReact,
        title: "React.js",
        color: "#5686E1",
        stack: 'front'
    },
    {
        id: 7,
        type: "img",
        file: "/icons/nextjs.svg",
        title: "Next.js",
        color: "#212121",
        stack: 'front'
    },
    {
        id: 9,
        type: "icon",
        file: faNodeJs,
        title: "Node.js",
        color: "#21A366",
        stack: 'back'
    },
    {
        id: 10,
        type: "img",
        file: "/icons/express.svg",
        title: "Express.js",
        color: "#212121",
        stack: 'back'
    },
    {
        id: 20,
        type: "img",
        file: "/icons/nestjs.svg",
        title: "Nest.js",
        color: "red",
        stack: 'back'
    },
    {
        id: 16,
        type: "img",
        file: "/icons/sequelize.svg",
        title: "Sequelize",
        color: "#01A9DB",
        stack: 'back'
    },
    {
        id: 11,
        type: "img",
        file: "/icons/mongodb.svg",
        title: "Mongodb",
        color: "#4CAF50",
        stack: 'back'
    },
    {
        id: 17,
        type: "img",
        file: '/icons/postgreSQL.svg',
        title: "PostgreSQL",
        color: "#5882FA",
        stack: 'back'
    },
    {
        id: 18,
        type: "img",
        file: "/icons/mysql.svg",
        title: "Mysql",
        color: "#5882FA",
        stack: 'back'
    },
    {
        id: 19,
        type: "icon",
        file: faPython,
        title: "Python",
        color: "#5882FA",
        stack: 'basic'
    },
    {
        id: 20,
        type: "img",
        file: '/icons/django.sql',
        title: "Django",
        color: "#5882FA",
        stack: 'basic'
    },
    {
        id: 20,
        type: "icon",
        file: faAngular,
        title: "Angular.js",
        color: "#5882FA",
        stack: 'basic'
    },
    {
        id: 14,
        type: "icon",
        file: faGitAlt,
        title: "GIT",
        color: "#F4511E",
        stack: 'other'
    },
    {
        id: 15,
        type: "icon",
        file: faGithub,
        title: "GitHub",
        color: "#000000",
        stack: 'other'
    },
    
]