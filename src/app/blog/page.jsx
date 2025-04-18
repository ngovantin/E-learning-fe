'use client';
import BlogCard from '@/components/cards/BlogCard';
import Loader from '@/components/Loader';
import ProtectedLink from '@/components/ProtectedLink';
import useFetch from '@/Hooks/useFetch';
import ListLayout from '@/layout/ListLayout';
import { faAngleLeft, faAngleRight, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const TITLE = 'Featured Blogs';

const DESCRIPTION =  `A curated collection of articles sharing insights and experiences on self-learning programming online, along
                      with in-depth discussions on various web development techniques, best practices, and industry trends.`

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

  return (
      <ListLayout title={TITLE} description={DESCRIPTION} side='l'>
        
        <div className='flex flex-col gap-y-3 lg:flex-[3.5]'>
          <ProtectedLink className='bg-[#12a483] text-center py-3 rounded-full font-bold text-white cursor-pointer' href='/write'>New Blog <FontAwesomeIcon icon={faPen}/></ProtectedLink>
          {data?.blogs.map((blog) => (
            <BlogCard key={blog._id} data={blog} />
          ))}
          <Loader isLoading={isLoading}/>
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

      </ListLayout>
    
  );
};
export default page;
