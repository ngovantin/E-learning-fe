'use client';
import { useParams } from 'next/navigation';
import TestProvider from './TestProvider';
import useFetch from '@/Hooks/useFetch';
import { useState } from 'react';
import FullExamControls from '../FullExamControls';
import Part1 from './Part1';
import Part2 from './Part2';
import SectionPart from './SectionPart';
import Part5 from './Part5';


const PARTS = [
  { label: 'part 1', value: 1 },
  { label: 'part 2', value: 2 },
  { label: 'part 3', value: 3 },
  { label: 'part 4', value: 4 },
  { label: 'part 5', value: 5 },
  { label: 'part 6', value: 6 },
  { label: 'part 7', value: 7 }
];

const page = () => {
  const [currentPart, setCurenPart] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/v1/test-toeic/get-one/${id}`, true);

  return (
    <TestProvider>
      <div className='min-h-[100vh] px-5 md:px-15 2xl:px-[12vw]'>
        <div className='h-15 border-b lg:h-[61px]' />
        <iframe
          width='100%'
          height='120'
          allow='autoplay'
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${data?.audio}&color=%23919191&inverse=false&auto_play=true`}
        ></iframe>
        <div className='my-5 lg:flex lg:gap-8'>
          <div className='md:grid md:gap-5 lg:block lg:flex-1 lg:self-start xl:grid-cols-2'>
            <FullExamControls />
          </div>
          <div className='flex flex-col gap-y-3 lg:flex-[3.5]'>
            <div className='mb-5 flex flex-wrap'>
              {PARTS.map((part) => (
                <p
                  onClick={() => setCurenPart(part.value)}npm 
                  className={`${currentPart === part.value ? 'scale-120 bg-[#12a483]' : 'bg-[#65b8a4]'} cursor-pointer px-4 py-2 font-bold text-white`}
                  key={part.value}
                >
                  {part.label}
                </p>
              ))}
            </div>
            
            {currentPart === 1 && <Part1 pictures={data?.part1} />}
            {currentPart === 2 && <Part2 />}
            {currentPart === 3 && <SectionPart sections={data?.part3} />}
            {currentPart === 4 && <SectionPart sections={data?.part4} />}
            {currentPart === 5 && <Part5 questions={data?.part5} />}
            {currentPart === 6 && <SectionPart sections={data?.part6} />}
            {currentPart === 7 && <SectionPart sections={data?.part7} />}
          </div>
        </div>
      </div>
    </TestProvider>
  );
};
export default page;
