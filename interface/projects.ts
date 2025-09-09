export type IProjectType = 'frontend' | 'backend' | 'all';
export type IProjectCategory =
  | 'Aplicación Web'
  | 'API'
  | 'Dashboard'
  | 'Aplicación Móvil'
  | 'Otro';

export type ITechCategory = 'Frontend';

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
  features: string[];
  techStack: ITechStack[];
  longDescription?: string;
}
