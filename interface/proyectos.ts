export interface IProyectos {
    id: number;
    titulo: string;
    conocimientos: ITecnologia[];
    img: string;
    heigth: string; // En pixeles
    repositorio?: string; // Repositorio de github
    url?: string; // URL del proyecto, si es que está alojado.
    columns: number;
}

export type ITecnologia =    "HTML" |
                             "CSS3" | 
                             "Bootstrap" | 
                             "Sass" | 
                             "JavaScript" | 
                             "React.js" | 
                             "Next.js" | 
                             "Typescript" | 
                             "Firebase" |
                             "Node.js" | 
                             "Express.js" | 
                             "Mongodb" | 
                             "NPM" | 
                             "GIT" | 
                             "GitHub" |
                             "Mysql"  |
                             "Sequelize"