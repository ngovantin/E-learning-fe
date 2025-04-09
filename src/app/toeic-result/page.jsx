'use client';
import TestResultCard from '@/components/cards/TestResultCard';
import Loader from '@/components/Loader';
import useFetch from '@/Hooks/useFetch';
import ListLayout from '@/layout/ListLayout';

const TITLE = 'Your Exam Performance Overview';
const DECSRIPTION = `View all your past exam results in one place. Track your scores, analyze your performance, and monitor your progress over time. Use detailed insights to identify strengths and areas for improvement, helping you achieve better results in future exams!`;

const page = () => {
  const { data ,isLoading } = useFetch(`/v1/testResult/getAll`, true);
  console.log(data);
  return (
    <ListLayout title={TITLE} description={DECSRIPTION}>
      <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-[1.5vw]'>
        {data?.map((result) => <TestResultCard key={result._id} data={result} />)}
      </div>
      <Loader isLoading={isLoading}/>
    </ListLayout>
  );
};
export default page;
