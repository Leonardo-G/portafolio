interface IProps {
  text: string;
}

export default function Badge({ text }: IProps) {
  return (
    <div className='inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600'>
      <p className='tracking-wide capitalize'>{text}</p>
    </div>
  );
}
