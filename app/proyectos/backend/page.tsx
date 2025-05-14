'use client';

import { usePathname } from 'next/navigation';
import ProjectsGroup from '../components/ProjectsGroup';
import { IProjectType } from '@/interface/proyectos';

const PATHNAME_SPLIT = '/proyectos/';

export default function ProjectBackendPage() {
  const pathname = usePathname();
  const structureProject = pathname.split(PATHNAME_SPLIT);

  return <ProjectsGroup projectType={structureProject[1] as IProjectType} />;
}
