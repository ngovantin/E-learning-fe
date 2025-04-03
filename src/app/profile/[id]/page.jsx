'use client';
import BlogCard from '@/components/cards/BlogCard';
import SidebarProfile from '@/components/SidebarProfile';
import useFetch from '@/Hooks/useFetch';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const TABS = [
  { label: 'Blog', value: 'blog' },
  { label: 'Shared Blog', value: 'share' },
  { label: 'Enrolled Course', value: 'enrolled' }
];

const page = () => {
  const [selectedTab, setSelectedTab] = useState('share');
  const { id } = useParams();
  const { data: userProfile } = useFetch(`/v1/user/${id}`);

  return (
    <div className='min-h-[100vh] px-5 md:px-15 2xl:px-[12vw]'>
      <div className='h-15 border-b lg:h-[61px]' />
      {userProfile && (
        <div className='mt-3 flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <SidebarProfile
              name={userProfile.name}
              avatar={userProfile.avatar}
              joinDate={userProfile.createdAt}
              admin={userProfile.admin}
            />
          </div>
          <div className='flex-[3]'>
            <div className='grid grid-cols-3'>
              {TABS.map((tab) => (
                <button
                  onClick={() => {
                    setSelectedTab(tab.value);
                  }}
                  className={`py-3 font-bold uppercase transition-all duration-200 ${
                    selectedTab === tab.value
                      ? 'border-b-4 border-blue-500 text-blue-500'
                      : 'text-gray-500 hover:text-blue-400'
                  }`}
                  key={tab.value}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className={`${selectedTab === 'blog'? '':'hidden'} flex flex-col gap-3`}>
              {userProfile.blog.map((blog) => (
                <BlogCard
                  key={blog._id}
                  data={{
                    ...blog,
                    user: { admin: userProfile.admin, avatar: userProfile.avatar, name: userProfile.name }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default page;
