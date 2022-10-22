export interface IProyectos {
    id: number;
    titulo: string;
    conocimientos: ITecnologia[];
    img: string;
}

export type ITecnologia =    "HTML" |
                             "CSS3" | 
                             "Bootstrap" | 
                             "Sass" | 
                             "JavaScript" | 
                             "React.js" | 
                             "Next.js" | 
                             "Typescript" | 
                             "Node.js" | 
                             "Express.js" | 
                             "Mongodb" | 
                             "NPM" | 
                             "GIT" | 
                             "GitHub"