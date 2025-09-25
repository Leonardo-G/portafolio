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
    longDescription:
      'Plataforma simulando Mercado Libre, desarrollada con Next.js (React/TS). Implementa rendering híbrido (Server-Side Rendering, Static Site Generation) y consume una API backend separada (Nest/Node) para lectura de productos. Incluye carruseles y fetch con Axios.',
  },
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
    ],
    longDescription:
      'Aplicación web de comercio electrónico enfocada en productos tecnológicos. Permite a los usuarios navegar por un catálogo de productos, visualizar detalles individuales, añadir artículos al carrito y finalizar la compra mediante un formulario con validación. El sistema genera un identificador único de pedido y almacena la información en una base de datos en la nube',
  },
];
