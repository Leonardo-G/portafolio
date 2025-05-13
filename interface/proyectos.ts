export interface IProyectos {
  id: number;
  titulo: string;
  conocimientos: ITecnologia[];
  img: string;
  heigth: string; // En pixeles
  repositorio?: string; // Repositorio de github
  url?: string; // URL del proyecto, si es que está alojado.
  columns: number;
  structure: IProjectType;
}

export type IProjectType = 'frontend' | 'backend' | 'all';

export type ITecnologia =
  | 'HTML'
  | 'CSS3'
  | 'Bootstrap'
  | 'Sass'
  | 'JavaScript'
  | 'React.js'
  | 'Next.js'
  | 'Typescript'
  | 'Firebase'
  | 'Node.js'
  | 'Express.js'
  | 'PostgreSQL'
  | 'Mongodb'
  | 'NPM'
  | 'GIT'
  | 'GitHub'
  | 'Mysql'
  | 'Sequelize'
  | 'Nest.js'
  | 'Python'
  | 'Django'
  | 'Jest'
  | 'Angular.js';
