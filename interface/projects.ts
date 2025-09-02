export type IProjectType = 'frontend' | 'backend' | 'all';
export type IProjectCategory =
  | 'Aplicación Web'
  | 'API'
  | 'Dashboard'
  | 'Aplicación Móvil'
  | 'Otro';

export interface IProject {
  slug: string;
  title: string;
  images: string[];
  description: string;
  type: IProjectType;
  category: IProjectCategory;
}
