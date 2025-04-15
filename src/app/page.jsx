'use client';
import About from '@/components/About';
import CourseCard from '@/components/cards/CourseCard';
import Exam from '@/components/cards/Exam';
import Introduction from '@/components/Introduction';
import LearningCategory from '@/components/LearningCategory';
import Loader from '@/components/Loader';
import Reward from '@/components/Reward';
import TestResults from '@/components/TestResults';
import useFetch from '@/Hooks/useFetch';

const page = () => {
  const { data: tests, isLoading } = useFetch(`/v1/test-toeic`);
  return (
    <div className='relative bg-[#F5F7FB]'>
      <Introduction />
      <TestResults />
      <div className='flex h-20 items-center justify-center bg-gradient-to-b from-[#F8EBE9] to-[#F5F7FB]'>
        <p className='rotate-12 rounded-full bg-[#12a483] px-4 py-1 font-bold text-white'>About Us</p>
      </div>
      <Reward />
      <LearningCategory id={'course'} itemType='Course' categories={['TOEIC', 'IELTS']}>
        <div className='my-9 grid grid-cols-2 justify-between gap-2 gap-y-5 text-left lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5'>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </LearningCategory>
      <div className='h-25 bg-gradient-to-b from-[#F5F7FB] to-[#F8EBE9]' />
      <About />
      <div className='flex h-25 items-center justify-center bg-gradient-to-b from-[#F8EBE9] to-[#F5F7FB]'>
        <p className='inline-block rotate-12 rounded-full bg-[#12a483] px-4 py-1 font-bold text-white'>Practice</p>
      </div>
      <LearningCategory id='exam' itemType={'Exam'} categories={[2022, 2023, 2024]}>
        <div className='my-9 grid grid-cols-2 justify-between gap-2 gap-y-5 text-left lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5'>
          {tests?.tests.slice(0, 4).map((test) => (
            <Exam key={test._id} image={test.image} name={test.name} year={test.publishYear} id={test._id} />
          ))}
        </div>
        <Loader isLoading={isLoading} />
      </LearningCategory>
      <div className='flex h-25 items-center justify-center bg-gradient-to-b from-[#F5F7FB] to-[#F8EBE9]' />
    </div>
  );
};
export default page;
