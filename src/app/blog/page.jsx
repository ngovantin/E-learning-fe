'use client';
import BlogCard from '@/components/cards/BlogCard';
import useFetch from '@/Hooks/useFetch';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useFetch(`/v1/blog?page=${currentPage}`);

  const totalPages = Math.ceil(data?.blogsTotal / 10);

  const handleMovePage = (type) => {
    if (type === 'right') {
      if (currentPage === totalPages) return;
      setCurrentPage(currentPage + 1);
    }
    else if(type === 'left'){
      if(currentPage === 1) return;
      setCurrentPage(currentPage - 1);
    }
  };

  console.log(data);

  return (
    <div className='min-h-[100vh] px-5 md:px-15 2xl:px-[12vw]'>
      <div className='h-15 border-b lg:h-[61px]' />
      <div>
        <h2 className='my-4 xl:text-2xl'>Featured Blogs</h2>
        <p className='text-xs leading-relaxed font-light 2xl:text-sm'>
          A curated collection of articles sharing insights and experiences on self-learning programming online, along
          with in-depth discussions on various web development techniques, best practices, and industry trends.
        </p>
      </div>
      <div className='my-5 lg:flex lg:gap-8'>
        <div className='flex flex-col gap-y-3 lg:flex-[3.5]'>
          {data?.blogs.map((blog) => (
            <BlogCard key={blog._id} data={blog} />
          ))}
          <div className='flex items-center justify-center gap-3 mb-5'>
            <FontAwesomeIcon className={`${currentPage === 1 ? 'text-gray-300 cursor-none':''} cursor-pointer`} icon={faAngleLeft} onClick={()=>{handleMovePage('left')}}/>
            {Array.from({ length: totalPages }, (_, index) => (
              <p
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                }}
                className={`${index + 1 === currentPage ? 'bg-[#12a483] text-white' : 'hover:border'} flex h-8 w-8 cursor-pointer items-center justify-center rounded-sm font-serif text-sm`}
              >
                {index + 1}
              </p>
            ))}
            <FontAwesomeIcon className={`${currentPage === totalPages ? 'text-gray-300 cursor-none':''} cursor-pointer`} icon={faAngleRight} onClick={()=>{handleMovePage('right')}} />
          </div>
        </div>
        <div className='md:grid md:grid-cols-2 md:gap-5 lg:sticky lg:top-[5rem] lg:block lg:flex-1 lg:self-start'>
          <img className='mb-10 rounded-xl' src='/blog-1.png' />
          <img className='mb-10 rounded-xl' src='/blog-2.png' />
        </div>
      </div>
    </div>
  );
};
export default page;
