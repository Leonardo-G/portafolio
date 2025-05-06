interface IProps {
  text: string;
}

export default function Badge({ text }: IProps) {
  return (
    <div className='flex'>
      <div className='w-2 rounded-full'></div>
      <p>{text}</p>
    </div>
  );
}
