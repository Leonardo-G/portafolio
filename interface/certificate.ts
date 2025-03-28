export interface ICertificate {
  id: number;
  certificate: string;
  linkCertificate: string;
  type: 'Certificado';
  education: string;
  year: string;
  imgCertificate: string;
  knowledge: string[];
  technologies: TypeTechnologies[];
}

type TypeTechnologies =
  | 'HTML5'
  | 'CSS3'
  | 'SASS'
  | 'MaterialUI'
  | 'Bootstrap'
  | 'Tailwind CSS'
  | 'Styled Components'
  | 'JSON'
  | 'JavaScript'
  | 'TypeScript'
  | 'React.js'
  | 'Redux'
  | 'Jest'
  | 'Router'
  | 'Google Sign-In'
  | 'Firebase'
  | 'Next.js'
  | 'Node.js'
  | 'Express.js'
  | 'PUG'
  | 'MongoDB'
  | 'Mongoose'
  | 'MySQL con Sequelize'
  | 'MySQL'
  | 'JWT'
  | 'Sockets'
  | 'SocketIO'
  | 'Google APIs'
  | 'Heroku'
  | 'NPM'
  | 'PostMan'
  | 'Yargs'
  | 'RESTServer'
  | 'GIT'
  | 'GITHUB';
