'use client';
import Exam from '@/components/cards/Exam';
import Loader from '@/components/Loader';
import useFetch from '@/Hooks/useFetch';
import ListLayout from '@/layout/ListLayout';
import Link from 'next/link';
import { useState } from 'react';

const PUBLISHED_YEARS = [
  {
    label: 'ALL',
    value: null
  },
  {
    label: '2020',
    value: 2020
  },
  {
    label: '2021',
    value: 2021
  },
  {
    label: '2022',
    value: 2022
  },
  {
    label: '2023',
    value: 2023
  },
  {
    label: '2024',
    value: 2024
  }
];

const TITLE = 'toeic pratice sets';
const DECSRIPTION = `This page provides TOEIC practice tests to help you improve your test-taking skills. You can take mock exams
          with a simulated test interface, review answers, and read detailed explanations to understand each question
          better. The test sets are regularly updated to closely follow the actual TOEIC structure, ensuring you are
          well-prepared for the exam.
          The TOEIC test consists of two main sections: Listening Comprehension and Reading Comprehension, with a total
          duration of 120 minutes. The Listening section lasts approximately 45 minutes with 100 questions, while the
          Reading section lasts 75 minutes with 100 questions. During the test, you are not allowed to use dictionaries,
          mobile phones, or any supporting materials. Stay focused and adhere to the time limits to simulate a real test
          experience as closely as possible.`;

const page = () => {
  const [publishedYear, setPublishedYear] = useState(null);
  const { data, isLoading } = useFetch(`/v1/test-toeic`);
  const filteredTest = data?.tests.filter((test) => {
    if (!publishedYear) return test;
    else return test.publishYear === publishedYear;
  });
  return (
    <ListLayout title={TITLE} description={DECSRIPTION}>
      <div className='mb-5 md:flex md:items-center md:justify-between gap-y-3'>
        <div className='flex flex-wrap'>
          {PUBLISHED_YEARS.map((year) => (
            <p
              onClick={() => setPublishedYear(year.value)}
              className={`${publishedYear === year.value ? 'scale-120 bg-[#12a483]' : 'bg-[#65b8a4]'} cursor-pointer px-4 py-2 font-bold text-white`}
              key={year.value}
            >
              {year.label}
            </p>
          ))}
        </div>
        <Link
          href={'/ai-test-generator'}
          className='cursor-pointer rounded-full bg-[#ff723d] px-3 py-2 text-sm font-semibold text-white'
        >
          AI-Generated Exam
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 2xl:grid 2xl:grid-cols-4'>
        {filteredTest?.map((test) => (
          <Exam key={test._id} image={test.image} name={test.name} year={test.publishYear} id={test._id} />
        ))}
      </div>
      <Loader isLoading={isLoading} />
    </ListLayout>
  );
};
export default page;
