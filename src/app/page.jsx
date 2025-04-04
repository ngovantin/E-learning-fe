'use client';
import CourseCard from '@/components/cards/CourseCard';
import Exam from '@/components/cards/Exam';
import Feedback from '@/components/Feedback';
import Introduction from '@/components/Introduction';
import LearningCategory from '@/components/LearningCategory';
import AuthForm from '@/components/popup/AuthForm';
import WelocmeVideo from '@/components/popup/WelocmeVideo';
import Reward from '@/components/Reward';
import TestResults from '@/components/TestResults';
import useFetch from '@/Hooks/useFetch';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';

const page = () => {
  const tests = useFetch(`/v1/test-toeic`);

  
  return (
    <div className='relative bg-[#F5F7FB]'>
      <div className='relative'>
        <div className='2xl:[12vw] flex items-center justify-between bg-[#F8EBE9] pt-14 xl:px-[7vw]'>
          <Introduction/>
          <img
            src='wallpaper.png'
            className='h-[90vw] w-[45vw] object-cover object-left-top lg:h-[60vw] xl:h-[45vw]'
          />
        </div>
        <div className='pointer-events-none absolute bottom-[-1] h-32 w-[100%] bg-gradient-to-b from-transparent to-[#F8EBE9]'></div>
      </div>
      <TestResults />
      <div className='flex h-20 items-center justify-center bg-gradient-to-b from-[#F8EBE9] to-[#F5F7FB]'>
        <p className='rotate-12 rounded-full bg-[#12a483] px-4 py-1 font-bold text-white'>About Us</p>
      </div>
      <div>
        <h3 className='px-[6vw] text-center text-sm font-semibold text-[rgb(85,85,85)] lg:text-2xl xl:pt-10 xl:text-3xl 2xl:text-5xl'>
          We are passionate about empowering learners Woldwide with high-quality, accessible & engaging education. Our
          mission offering a diverse range of courses
        </h3>
        <Reward />
      </div>
      <LearningCategory id={'course'} itemType='Course' categories={['TOEIC', 'IELTS']}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </LearningCategory>
      <div className='h-25 bg-gradient-to-b from-[#F5F7FB] to-[#F8EBE9]' />
      <div className='bg-[#F8EBE9]'>
        <p
          id='about'
          className='mb-7 ml-[3vw] inline-flex [rotate:-12deg] rounded-full bg-[#ff723d] px-5 py-0.5 font-bold text-[#F5F7FB] 2xl:text-4xl'
        >
          About Us
        </p>
        <div className='py-3 pr-[6vw] xl:pl-[6vw]'>
          <div className='flex items-center justify-around gap-2'>
            <img
              src='about.png'
              alt=''
              className='h-[90vw] w-[45vw] object-cover object-right lg:h-[60vw] xl:h-[45vw] xl:object-contain'
            />
            <div className='w-[50vw]'>
              <p className='mb-7 inline-flex [rotate:-12deg] rounded-full bg-[#ff723d] px-5 py-0.5 font-bold text-[#F5F7FB]'>
                Why us
              </p>
              <h1 className='text-sm font-semibold md:text-xl lg:text-3xl xl:text-4xl 2xl:mb-6 2xl:text-6xl'>
                Growth Skill With Devskill Academy & Accelerate to your Better future
              </h1>
              <div className='mt-6 text-[9px] md:text-[13px] lg:text-lg xl:text-xl 2xl:text-2xl'>
                <p className='py-4'>
                  Embrace the transformative journey of learning with Devskill; knowledge becomes a catalyst for
                  progress.
                </p>

                <p className='mt-6 pb-7 text-[9px] md:text-[13px] lg:text-lg xl:text-xl 2xl:text-2xl'>
                  Our dynamic educational platform offers you the tools and resources to propel yourself towards a
                  brighter future. With expert guidance & a supportive community,
                </p>
              </div>
            </div>
          </div>
        </div>
        <Feedback />
      </div>
      <div className='flex h-25 items-center justify-center bg-gradient-to-b from-[#F8EBE9] to-[#F5F7FB]'>
        <p className='inline-block rotate-12 rounded-full bg-[#12a483] px-4 py-1 font-bold text-white'>Practice</p>
      </div>
      <LearningCategory id='exams' itemType={'Exam'} categories={[2022, 2023, 2024]}>
        {tests.data?.tests.slice(0, 4).map((test) => (
          <Exam key={test._id} image={test.image} name={test.name} year={test.publishYear} />
        ))}
      </LearningCategory>
      <div className='flex h-25 items-center justify-center bg-gradient-to-b from-[#F5F7FB] to-[#F8EBE9]' />
    </div>
  );
};
export default page;
