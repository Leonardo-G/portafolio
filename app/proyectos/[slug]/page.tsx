import { projects } from '@/database/projects';
import Gallery from './components/Gallery';
import Text from '@/components/text/Text';
import { IProject } from '@/interface/projects';
import { notFound } from 'next/navigation';
import TopInfo from './components/TopInfo';
import Badge from '@/components/UI/Badge';
import ProjectButtons from './components/ProjectButtons';
import Description from './components/Description';
import Footer from '@/components/footer/Footer';

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
    <div>
      <div className='mx-auto my-10 w-full max-w-[1280px]'>
        <TopInfo type={project.type} category={project.category} />
        <Text as='h1' className='mt-5'>
          {project.title}
        </Text>
        <Text className='mt-5 text-center text-xl text-gray-500'>
          {project.description}
        </Text>
        <div className='mt-6 flex justify-center gap-3'>
          {project.mainSkills.map((skill) => (
            <Badge key={skill} text={skill} variant='gray' />
          ))}
        </div>
        <ProjectButtons githubUrl={project.githubUrl} />
        <div className='mt-10'>
          <Gallery title={project.title} images={project.images} />
        </div>
        <Description
          features={project.features}
          techStack={project.techStack}
          longDescription={project.longDescription}
        />
        <div className='my-10 mb-16 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent dark:via-orange-700'></div>
      </div>
      <Footer />
    </div>
  );
}
