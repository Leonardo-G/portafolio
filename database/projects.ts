import { IProject } from '@/interface/projects';

export const projects: IProject[] = [
  {
    title: 'Tecnología Ecommerce',
    slug: 'tecnologia-ecommerce',
    images: [
      '/proyectos/tecnologia-ecommerce/1.png',
      '/proyectos/tecnologia-ecommerce/2.png',
      '/proyectos/tecnologia-ecommerce/4.png',
      '/proyectos/tecnologia-ecommerce/3.png',
      '/proyectos/tecnologia-ecommerce/5.png',
      '/proyectos/tecnologia-ecommerce/6.png',
      '/proyectos/tecnologia-ecommerce/7.png',
    ],
    description:
      'Aplicación de ecommerce de productos tecnológicos desarrollada con React y Firebase, con catálogo dinámico, carrito de compras y generación de órdenes de compra.',
    type: 'frontend',
    category: 'Aplicación Web',
    mainSkills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind Css', 'Stripe'],
    githubUrl: 'https://github.com/Leonardo-G/React-ecommerce-tecnologia',
    liveUrl: 'http://react-ecommerce-tecnologia.vercel.app/',
    features: [
      'Catálogo dinámico de productos tecnológicos cargados desde Firebase/Firestore.',
      'Detalle de producto individual con información completa y opción de compra.',
      'Carrito de compras: agregar, eliminar y actualizar cantidades de productos.',
      'Formulario de checkout con validación de datos del cliente.',
      'Skeletons de carga para mejorar la experiencia de usuario mientras se cargan productos o vistas.',
      'Generación de orden con ID único y guardado en Firestore.',
      'Pasarela de pagos Stripe Checkout integrada para procesar pagos reales.',
      'Webhook de Stripe para confirmar transacciones (checkout.session.completed)',
      'Persistencia en Firestore tanto de productos como de órdenes.',
    ],
    gridImages: 7,
    year: 2023,
    techStack: [
      {
        category: 'Frontend',
        techs: [
          'Next.js',
          'React.js',
          'TypeScript',
          'Stripe',
          'Tailwind Css',
          'Css',
        ],
      },
      {
        category: 'Backend',
        techs: ['Firebase'],
      },
      {
        category: 'Tools',
        techs: ['Git', 'Github', 'Vercel'],
      },
    ],
    longDescription:
      'Aplicación web de comercio electrónico enfocada en productos tecnológicos. Permite a los usuarios navegar por un catálogo de productos, visualizar detalles individuales, añadir artículos al carrito y finalizar la compra mediante un formulario con validación. El sistema genera un identificador único de pedido y almacena la información en una base de datos en la nube',
    sizeCard: 'xl',
  },
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
    year: 2023,
    gridImages: 6,
    longDescription:
      'Plataforma simulando Mercado Libre, desarrollada con Next.js (React/TS). Implementa rendering híbrido (Server-Side Rendering, Static Site Generation) y consume una API backend separada (Nest/Node) para lectura de productos. Incluye carruseles y fetch con Axios.',
    sizeCard: 'md',
  },

  {
    title: 'Proyectos de Frontend Mentor',
    slug: 'project-frontend-mentor',
    images: [
      '/proyectos/frontend-mentor/1.webp',
      '/proyectos/frontend-mentor/2.webp',
      '/proyectos/frontend-mentor/3.webp',
      '/proyectos/frontend-mentor/5.webp',
      '/proyectos/frontend-mentor/4.webp',
      '/proyectos/frontend-mentor/6.webp',
      '/proyectos/frontend-mentor/7.webp',
    ],
    description:
      'Colección de proyectos realizados a partir de distintos retos de Frontend Mentor, enfocados en landing pages, componentes UI y dashboards responsivos.',
    type: 'frontend',
    category: 'Aplicación Web',
    mainSkills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Leonardo-G/front-mentor',
    year: 2023,
    features: [
      'Conjunto de retos prácticos de Frontend Mentor resueltos con distintos stacks.',
      'Implementación de diseño responsive en todos los proyectos.',
      'Aplicación de buenas prácticas de accesibilidad (semántica HTML, etiquetas ARIA).',
      'Estilos con CSS puro, Tailwind CSS y en algunos casos frameworks UI.',
      'Uso de React.js en retos más complejos (dashboards, componentes dinámicos).',
      'Organización modular de código para facilitar mantenimiento y escalabilidad.',
    ],
    techStack: [
      {
        category: 'Frontend',
        techs: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
      },
      {
        category: 'Tools',
        techs: ['Git', 'Github', 'Vercel'],
      },
    ],
    gridImages: '7B',
    longDescription:
      'Este proyecto agrupa distintos desafíos completados en la plataforma Frontend Mentor, cada uno diseñado para mejorar habilidades en maquetación, estilos, accesibilidad y componentes interactivos. Incluye desde simples landing pages hasta interfaces más complejas como dashboards y aplicaciones con React. Todos los proyectos son totalmente responsivos y aplican prácticas modernas de desarrollo frontend.',
    sizeCard: 'md',
  },
];
