'use client';
import Author from '@/components/Author';
import SidebarProfile from '@/components/SidebarProfile';
import useFetch from '@/Hooks/useFetch';
import { useParams } from 'next/navigation';
import './main.css';

const page = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`);
  console.log({ data, isLoading, error });
  return (
    <div className='min-h-[100vh] px-5 md:px-15 2xl:px-[12vw]'>
      <div className='h-15 border-b lg:h-[61px]' />
      <div className='mt-10 mb-20 gap-4 lg:flex'>
        <div className='hidden flex-1 lg:block'>
          <SidebarProfile
            joinDate={data?.user.createdAt}
            name={data?.user.name}
            avatar={data?.user.avatar}
            publishedDate={data?.updatedAt}
            totalComments = {data?.commnent?.length}
            admin={data?.user.admin}
          />
        </div>
        <div className='lg:flex-[3]'>
          <h1 className='mb-6 lg:mb-10 lg:text-3xl'>{data?.title}</h1>
          <div className='lg:hidden'>
            <Author
              avatar={data?.user.avatar}
              name={data?.user.name}
              admin={data?.user.admin}
              publishedDate={data?.updatedAt}
            />
          </div>
          <div className='blog' dangerouslySetInnerHTML={{ __html: data?.content }} />
        </div>
      </div>
    </div>
  );
};
export default page;
