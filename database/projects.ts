import { IProject } from '@/interface/projects';

export const projects: IProject[] = [
  {
    title: 'Mercado Libre Clone',
    slug: 'mercado-libre-clone',
    images: [
      '/proyectos/clon-mercadolibre.png',
      '/proyectos/clon-mercadolibre-2.png',
      '/proyectos/clon-mercadolibre-3.png',
      '/proyectos/clon-mercadolibre-4.png',
      '/proyectos/clon-mercadolibre-5.png',
    ],
    description:
      'Plataforma de e-commerce similar a Mercado Libre, con búsqueda avanzada y carrito de compras.',
    type: 'frontend',
    category: 'Aplicación Web',
    mainSkills: ['React.js', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Leonardo-G/clon-mercadolibre',
  },
];
