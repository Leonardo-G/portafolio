export default function DotGrid() {
  return (
    <>
      {Array.from({ length: 18 }, (_, i) => i + 1).map((value) => (
        <div className='flex gap-[12px]' key={value}>
          <div className='h-[5px] w-[5px] bg-[#F597381F]'></div>
          <div className='h-[5px] w-[5px] bg-[#F597381F]'></div>
          <div className='h-[5px] w-[5px] bg-[#F597381F]'></div>
        </div>
      ))}
    </>
  );
}
