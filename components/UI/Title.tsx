interface IProps {
  title: string;
}

export default function Title({ title }: IProps) {
  return (
    <h2 className='text-grey-primary font-roboto tracking-title pl-5 pl-[30px] text-xl font-light uppercase'>
      {title}
    </h2>
  );
}
