import { useContext } from 'react';
import { useParams } from 'next/navigation';
import ExamTimer from './ExamTimer';
import { PartContext } from './[id]/TestProvider';

const FullExamControls = () => {
  const { timer, handleSubmit, userAnswers } = useContext(PartContext);
  const { id } = useParams();
  return (
    <div className='gap-2 rounded-2xl bg-[#fff] p-5 text-sm text-gray-700 shadow-lg'>
      <ExamTimer timer={timer} handleSubmit={handleSubmit} testId={id}/>
      <div className='grid grid-cols-5 gap-2 font-semibold md:flex-none md:grid-cols-10 lg:grid-cols-5 xl:flex-2'>
        {userAnswers.map((answer, index) => (
          <p
            className={`${answer ? 'bg-[#12a483] text-white' : 'border-gray-400'} grid h-full w-full place-items-center rounded-md border`}
            key={index}
          >
            {index + 1}
          </p>
        ))}
      </div>
    </div>
  );
};
export default FullExamControls;
