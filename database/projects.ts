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
    mainSkills: ['React.js', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Leonardo-G/clon-mercadolibre',
  },
];
