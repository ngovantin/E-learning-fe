const ListLayout = ({ children, title, description }) => {
  return (
    <div className='min-h-[100vh] px-5 md:px-15 2xl:px-[12vw]'>
      <div className='h-15 border-b lg:h-[61px]' />
      <div>
        <h2 className='my-4 uppercase xl:text-2xl'>{title}</h2>
        <p className='text-xs leading-relaxed font-light 2xl:text-sm'>{description}</p>
      </div>
      <div className='my-5 lg:flex lg:gap-8'>
        <div className='flex flex-col gap-y-3 lg:flex-[3.5]'>{children}</div>
      <div className='md:grid md:grid-cols-2 md:gap-5 lg:sticky lg:top-[5rem] lg:block lg:flex-1 lg:self-start'>
        <img className='mb-10 rounded-xl' src='/blog-1.png' />
        <img className='mb-10 rounded-xl' src='/blog-2.png' />
      </div>
      </div>
    </div>
  );
};
export default ListLayout;
