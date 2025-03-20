'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(()=>import('react-quill'), {ssr: false})

const page = () => {
  const [thumbnail, setThumbnail] = useState('');
  const [editor, setEditor] = useState('');


  const handleThumbnailUpLoad = (result) => {
    setThumbnail(result.info.secure_url);
  };
  return (
    <div className='min-h-[100vh]'>
      <div className='fixed h-14 w-full bg-[#d3d3d3] lg:h-15' />
      <div className='h-14' />
      <div className='w-full items-center text-center'>
        <input type='text' className='w-full font-semibold text-[#636363] outline-none' />
        <CldUploadWidget uploadPreset='tinn-blog' onSuccess={handleThumbnailUpLoad}>
          {({ open }) => {
            return <button onClick={() => open()}>Thumbnail</button>;
          }}
        </CldUploadWidget>
        {thumbnail && <img src={thumbnail} alt='' />}
      </div>
      <div>
        <ReactQuill theme='snow' value={editor} onChange={setEditor}/>
      </div>
    </div>
  );
};
export default page;
