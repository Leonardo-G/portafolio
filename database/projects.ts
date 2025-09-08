import { IProject } from '@/interface/projects';

export const projects: IProject[] = [
  {
    title: 'Mercado Libre Clone',
    slug: 'mercado-libre-clone',
    images: [
      '/proyectos/mercado-libre-clon/1.png',
      '/proyectos/mercado-libre-clon/2.png',
      '/proyectos/mercado-libre-clon/3.png',
      '/proyectos/mercado-libre-clon/4.png',
      '/proyectos/mercado-libre-clon/5.png',
      '/proyectos/mercado-libre-clon/6.png',
      '/proyectos/mercado-libre-clon/7.png',
    ],
    description:
      'Plataforma de e-commerce similar a Mercado Libre, con búsqueda avanzada y carrito de compras.',
    type: 'frontend',
    category: 'Aplicación Web',
    mainSkills: ['React.js', 'Next.js', 'TypeScript'],
    githubUrl: 'https://github.com/Leonardo-G/clon-mercadolibre',
    features: [
      'Clone de Mercado Libre construido con Next.js + React + TypeScript.',
      'Listado de productos desde base de datos propia',
      'Rendering híbrido: SSR, SSG para rendimiento y SEO.',
      'Frontend consume una API backend propia (Node/Express + MongoDB)',
      'Carruseles y UI rica con react-alice-carousel y Font Awesome.',
      'Peticiones HTTP con Axios y manejo de variables con dotenv.',
      'TypeScript como lenguaje principal del proyecto.',
    ],
    techStack: [
      {
        category: 'Frontend',
        techs: [
          'Next.js',
          'React.js',
          'TypeScript',
          'Axios',
          'Font Awesome',
          'Css',
        ],
      },
    ],
  },
];
