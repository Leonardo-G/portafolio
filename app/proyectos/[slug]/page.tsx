import { projects } from '@/database/projects';
import ImageGrid from './components/ImageGrid';
import Text from '@/components/UI/text/Text';
import { IProject } from '@/interface/projects';
import { notFound } from 'next/navigation';
import TopInfo from './components/TopInfo';

interface IProps {
  params: IParams;
}

interface IParams {
  slug: string;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function PageDetail({ params }: IProps) {
  const { slug } = params;
  console.log(slug);
  const project: IProject | undefined = projects.find(
    (proj) => proj.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <div className='mx-auto my-10 w-full max-w-[1280px]'>
      <TopInfo type={project.type} category={project.category} />
      <Text as='h1' className='mt-5'>
        {project.title}
      </Text>
      <div className='mt-10'>
        <ImageGrid
          title=''
          images={[
            '/proyectos/clon-mercadolibre.png',
            '/proyectos/clon-mercadolibre.png',
            '/proyectos/clon-mercadolibre.png',
            '/proyectos/clon-mercadolibre.png',
            '/proyectos/clon-mercadolibre.png',
          ]}
        />
      </div>
    </div>
  );
}
