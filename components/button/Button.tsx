import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

interface IProps {
  variant?: 'default' | 'orange';
  children: ReactNode;
}

export default function Button({ variant = 'default', children }: IProps) {
  const variantClasses = {
    orange: 'bg-orange-primary hover:bg-orange-400 text-white',
    black: 'bg-black text-white',
    default: 'bg-black hover:bg-gray-900',
  };

  return (
    <button
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-xl px-5 py-3 shadow-lg transition-all duration-300 hover:shadow-xl',
        variantClasses[variant],
      )}
    >
      {children}
    </button>
  );
}
