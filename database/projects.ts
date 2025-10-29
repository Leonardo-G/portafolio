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
  {
    title: 'Arquitectura Proyecto',
    slug: 'arquitectura-proyecto',
    images: [
      '/proyectos/arquitectura/1.webp',
      '/proyectos/arquitectura/2.webp',
      '/proyectos/arquitectura/3.webp',
      '/proyectos/arquitectura/4.webp',
      '/proyectos/arquitectura/5.webp',
      '/proyectos/arquitectura/6.webp',
    ],
    description:
      'Landing pages, desarrollada con HTML, CSS y JavaScript, con enfoque en diseño minimalista, responsivo y con animaciones suaves. Incluye secciones de presentación, servicios, proyectos destacados y formulario de contacto funcional.',
    type: 'frontend',
    category: 'Aplicación Web',
    mainSkills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Design',
      'Animations',
    ],
    githubUrl: 'https://github.com/Leonardo-G/Arquitectura-Proyecto',
    liveUrl: 'https://leonardo-g.github.io/Arquitectura-Proyecto/',
    features: [
      'Diseño moderno, limpio y orientado a destacar la identidad visual del estudio.',
      'Estructura semántica en HTML con enfoque en accesibilidad y SEO.',
      'Diseño completamente responsive y optimizado para distintos dispositivos.',
      'Animaciones suaves con transiciones en scroll y efectos hover.',
      'Sección de proyectos con galería de imágenes y descripciones.',
      'Formulario de contacto funcional con validaciones de campos.',
    ],
    gridImages: 6,
    year: 2023,
    techStack: [
      {
        category: 'Frontend',
        techs: ['HTML5', 'CSS3', 'JavaScript'],
      },
      {
        category: 'Tools',
        techs: ['Git', 'GitHub'],
      },
    ],
    longDescription:
      'Sitio web diseñado con el objetivo de transmitir profesionalismo y modernidad. Desarrollado utilizando tecnologías web estándar (HTML, CSS y JavaScript), cuenta con una estructura visual basada en secciones claras: presentación del estudio, servicios ofrecidos, proyectos realizados y un formulario de contacto. Se implementaron animaciones sutiles y un diseño adaptable a distintos dispositivos para garantizar una experiencia visual fluida y atractiva. El código está optimizado para carga rápida, mantenimiento sencillo y compatibilidad entre navegadores.',
    sizeCard: 'md',
  },
  {
    title: 'Proyectos SQL y Bash – freeCodeCamp',
    slug: 'sql-bash-freecodecamp',
    images: [
      '/proyectos/freecodecamp/1.webp',
      '/proyectos/freecodecamp/2.webp',
      '/proyectos/freecodecamp/3.webp',
      '/proyectos/freecodecamp/4.webp',
      '/proyectos/freecodecamp/5.webp',
      '/proyectos/freecodecamp/6.webp',
    ],
    description:
      'Colección de proyectos de bases de datos y automatización desarrollados durante el curso Relational Database de freeCodeCamp. Incluye scripts Bash y consultas SQL para modelar, poblar y analizar bases de datos en PostgreSQL.',
    type: 'backend',
    category: 'Base de Datos / Automatización',
    mainSkills: ['PostgreSQL', 'SQL', 'Bash', 'Shell Script', 'Automatización'],
    githubUrl: 'https://github.com/Leonardo-G/proyectos-psql',
    features: [
      'Incluye todos los proyectos del módulo “Relational Database” de freeCodeCamp: World Cup Database, Periodic Table Database, Salon Appointment Scheduler, Number Guessing Game y Universe Database.',
      'Cada proyecto contiene su propio script Bash (`.sh`) para crear, poblar y consultar las bases de datos.',
      'Uso intensivo de PostgreSQL para definir estructuras relacionales, llaves primarias y foráneas, y relaciones entre entidades.',
      'Automatización completa de inserción y consultas mediante comandos en Bash.',
      'Integración de datos desde archivos CSV externos y validaciones previas a las inserciones.',
      'Consultas analíticas para obtener estadísticas, relaciones jerárquicas y cálculos agregados.',
      'Ejemplo de buenas prácticas de modelado relacional y manipulación de datos con psql CLI.',
    ],
    techStack: [
      {
        category: 'Backend',
        techs: ['PostgreSQL', 'SQL'],
      },
      {
        category: 'Automatización',
        techs: ['Bash', 'Shell Script'],
      },
      {
        category: 'Tools',
        techs: ['psql CLI', 'Git', 'GitHub'],
      },
    ],
    year: 2025,
    gridImages: 6,
    longDescription: `Sobre este proyecto

Este conjunto de proyectos forma parte del curso “Relational Database” de freeCodeCamp, enfocado en la administración de bases de datos con PostgreSQL y la automatización mediante Bash scripting. Cada carpeta representa un proyecto con su propio esquema SQL y scripts para crear, poblar y consultar los datos.

Entre los ejercicios desarrollados se encuentran:
- World Cup Database – Carga automatizada de partidos desde CSV y consultas estadísticas.
- Periodic Table Database – Modelado de una tabla periódica con relaciones entre elementos y propiedades.
- Salon Appointment Scheduler – Aplicación de consola que gestiona reservas de un salón mediante SQL interactivo.
- Number Guessing Game – Script en Bash que implementa lógica de juego y persistencia en base de datos.
- Universe Database – Modelado de un universo con galaxias, estrellas, planetas y lunas, con claves foráneas y relaciones múltiples.

Cada proyecto refuerza conceptos como modelado relacional, normalización, manejo de claves primarias y foráneas, y automatización de tareas administrativas con shell scripting.`,
    sizeCard: 'xl',
  },
];
