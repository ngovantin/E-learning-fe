'use client';
import AddVocabulary from '@/components/cards/AddVocabulary';
import Vocabulary from '@/components/cards/Vocabulary';
import useFetch from '@/Hooks/useFetch';
import ListLayout from '@/layout/ListLayout';

import { useParams } from 'next/navigation';

const page = () => {
  const { id } = useParams();
  const { data } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/vocab/${id}`, true);

  const handlePractices = () =>{
    alert("This feature is currently under development.")
  }

  console.log(data);
  return (
    <ListLayout title={data?.name} description={data?.description}>
      <div>
        <button onClick={handlePractices} className='h-10 w-full rounded-full bg-[#ff723d] font-semibold text-white mb-10'>
          Practice this flashcard
        </button>
        <div className='flex flex-col gap-y-6'>
          <AddVocabulary/>
          { data && data.vocabulary.map(vocab =><Vocabulary key={vocab._id} data={vocab}/>) }
          <Vocabulary/>
        </div>
      </div>
    </ListLayout>
  );
};
export default page;
