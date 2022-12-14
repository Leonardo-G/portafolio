import { faBootstrap, faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faNodeJs, faNpm, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { IConocimientos } from "../interface/conocimientos";

export const conocimientosDB: IConocimientos[] = [
    {
        id: 1,
        type: "icon",
        file: faHtml5,
        title: "HTML",
        color: "#FFB800" 
    },
    {
        id: 2,
        type: "icon",
        file: faCss3Alt,
        title: "CSS3",
        color: "#2457C5"
    },
    {
        id: 3,
        type: "icon",
        file: faBootstrap,
        title: "Bootstrap",
        color: "#673AB7"
    },
    {
        id: 4,
        type: "icon",
        file: faSass,
        title: "Sass",
        color: "#F06292"
    },
    {
        id: 5,
        type: "icon",
        file: faJs,
        title: "JavaScript",
        color: "#EBC351"
    },
    {
        id: 6,
        type: "icon",
        file: faReact,
        title: "React.js",
        color: "#5686E1"
    },
    {
        id: 7,
        type: "img",
        file: "/icons/nextjs.svg",
        title: "Next.js",
        color: "#212121"
    },
    {
        id: 8,
        type: "img",
        file: "/icons/ts.svg",
        title: "Typescript",
        color: "#5686E1"
    },
    {
        id: 9,
        type: "icon",
        file: faNodeJs,
        title: "Node.js",
        color: "#21A366"
    },
    {
        id: 10,
        type: "img",
        file: "/icons/express.png",
        title: "Express.js",
        color: "#212121"
    },
    {
        id: 11,
        type: "img",
        file: "/icons/mongodb.svg",
        title: "Mongodb",
        color: "#4CAF50"
    },
    {
        id: 12,
        type: "img",
        file: "/icons/firebase.svg",
        title: "Firebase",
        color: "#FFB800"
    },
    {
        id: 13,
        type: "icon",
        file: faNpm,
        title: "NPM",
        color: "#D50000"
    },
    {
        id: 14,
        type: "icon",
        file: faGitAlt,
        title: "GIT",
        color: "#F4511E"
    },
    {
        id: 15,
        type: "icon",
        file: faGithub,
        title: "GitHub",
        color: "#000000"
    },
    {
        id: 16,
        type: "img",
        file: "/icons/sequelize.svg",
        title: "Sequelize",
        color: "#01A9DB"
    },
    {
        id: 17,
        type: "img",
        file: "/icons/mysql.png",
        title: "Mysql",
        color: "#5882FA"
    },
    
]