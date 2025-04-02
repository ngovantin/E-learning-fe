'use client';
import useClickOutside from '@/Hooks/useClickOutside';
import { useRef, useState } from 'react';
import Dictionary from '../popup/Dictionary';

const Bubble = () => {
  const ref = useRef(null);
  const [currentBubble, setCurrentBubble] = useState('');
  useClickOutside(ref, ()=>{setCurrentBubble('')});
  return (
    <div className='z-50 fixed right-5 bottom-5 flex flex-col items-end gap-5 md:flex-row'>
      <div ref={ref}>{currentBubble === 'dictionary' && <Dictionary />}</div>
      <div className='flex flex-col gap-y-3'>
        <img
          onClick={() => {
            setCurrentBubble('dictionary');
          }}
          className='h-13 w-13 cursor-pointer'
          src='/dictionary_bubble.png'
        />
        <img className='h-13 w-13 cursor-pointer' src='/bot_bubble.png' />
      </div>
    </div>
  );
};

export default Bubble;
