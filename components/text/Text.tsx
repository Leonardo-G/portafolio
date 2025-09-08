interface IProps {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
}

export default function Text({ as, children, className }: IProps) {
  const Tag = as ?? 'p';

  const stylesByTag = () => {
    switch (as) {
      case 'h1':
        return 'text-4xl font-bold text-center';
      case 'h2':
        return 'text-[22px] font-medium';
      case 'h3':
        return 'text-2xl font-medium';
      case 'p':
        return 'text-base leading-relaxed text-gray-600';
      case 'span':
        return 'text-sm';
      default:
        return '';
    }
  };

  return <Tag className={`${stylesByTag()} ${className}`}>{children}</Tag>;
}
