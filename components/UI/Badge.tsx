import { cn } from '@/utils/cn';

interface IProps {
  text: string;
  variant?: 'default' | 'orange' | 'gray';
  className?: string;
}

export default function Badge({
  text,
  variant = 'default',
  className,
}: IProps) {
  const variantClasses = {
    gray: 'bg-gray-100 text-gray-600',
    orange: 'bg-orange-100 text-orange-600',
    default: 'bg-transparent',
  };

  return (
    <div
      className={cn(
        'inline-block rounded-lg px-4 py-2 text-sm font-medium',
        variantClasses[variant],
        className,
      )}
    >
      <p className='tracking-wide capitalize'>{text}</p>
    </div>
  );
}
