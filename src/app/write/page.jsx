'use client';

import TextEditor from '@/components/text-editor';
import axios from 'axios';
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const page = () => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [content, setContent] = useState('');
  const [snippet, setSnippet] = useState('');
  const token = useSelector((state) => state.auth.currentUser?.accessToken);
  const router = useRouter();
  const handleThumbnailUpLoad = (result) => {
    setThumbnail(result.info.secure_url);
  };
  const handlePost = async () => {
    try {
      if (!title && !thumbnail && !content) return;
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/`,
        { title, thumbnail, content, snippet },
        {
          headers: { token: `Bearer ${token}` }
        }
      );
      router.push(`/blog/${res.data.blog._id}`)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className='min-h-[100vh] px-2 pb-5'>
      <div className='fixed h-14 w-full bg-[#d3d3d3] lg:h-15' />
      <div className='h-14' />
      <div className='my-5'>
        <div className='mb-5 flex items-center gap-1'>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type='text'
            placeholder='Blog title'
            className='w-full text-lg font-bold outline-none'
          />
          <button
            onClick={handlePost}
            className={`${title && thumbnail && content ? 'cursor-pointer bg-[#12a483]':'bg-[#acd4cb]'} w-20 rounded-full font-bold text-white uppercase`}
          >
            post
          </button>
        </div>
        <CldUploadWidget uploadPreset='tinn-blog' onSuccess={handleThumbnailUpLoad}>
          {({ open }) => {
            return (
              <button className='cursor-pointer bg-[#ff723d] px-5 font-semibold text-white' onClick={() => open()}>
                Thumbnail
              </button>
            );
          }}
        </CldUploadWidget>
        {thumbnail && (
          <img
            className={`${thumbnail ? 'rounded-tl-none' : ''} mb-5 max-h-[30vh] rounded-lg rounded-tl-none`}
            src={thumbnail}
          />
        )}
      </div>
      <TextEditor onChange={setContent} value={content} setSnippet={setSnippet}/>
    </div>
  );
};
export default page;
