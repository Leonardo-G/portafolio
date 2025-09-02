import Badge from '@/components/UI/Badge';
import { IProjectCategory } from '@/interface/projects';
import { IProjectType } from '@/interface/proyectos';
import { FaCode } from 'react-icons/fa6';

interface IProps {
  type: IProjectType;
  category: IProjectCategory;
}

export default function TopInfo({ type, category }: IProps) {
  return (
    <div className='flex items-center justify-center gap-3'>
      <Badge text={type} />
      <div className='h-1 w-1 rounded-full bg-gray-500'></div>
      <div className='flex items-center gap-2 text-gray-500'>
        <FaCode />
        <span className='text-sm text-gray-600'>{category}</span>
      </div>
    </div>
  );
}
