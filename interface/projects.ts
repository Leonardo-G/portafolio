export type IProjectType = 'frontend' | 'backend' | 'all';
export type IProjectCategory =
  | 'Aplicación Web'
  | 'API'
  | 'Dashboard'
  | 'Aplicación Móvil'
  | 'Base de Datos / Automatización'
  | 'Otro';

export type ITechCategory = 'Frontend' | 'Backend' | 'Tools' | 'Automatización';
export type GridKey = 6 | 7 | '7B';

export interface ITechStack {
  category: ITechCategory;
  techs: string[];
}

export interface IProject {
  slug: string;
  title: string;
  images: string[];
  description: string;
  type: IProjectType;
  category: IProjectCategory;
  mainSkills: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  techStack: ITechStack[];
  longDescription?: string;
  gridImages: GridKey;
  year: number;
  sizeCard: 'xl' | 'md';
}
