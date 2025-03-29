'use client';

import Question from '@/components/cards/Question';
import { useContext } from 'react';
import { PartContext } from './TestProvider';

const Part1 = ({ pictures }) => {
  const { userAnswers, setUserAnswers } = useContext(PartContext);
  const question = {
    options: { A: ' ', B: ' ', C: ' ', D: ' ' },
    question: ' '
  };
  return (
    <div>
      {pictures?.map((pic, index) => (
        <div key={index} className='xl:flex xl:flex-row-reverse'>
          <div className='flex justify-center'>
            <img src={pic} className='max-h-[50vh] xl:max-w-[30vw]' />
          </div>
          <Question data={question} userAnswers={userAnswers} setUserAnswers={setUserAnswers} index={index + 1} />
        </div>
      ))}
    </div>
  );
};
export default Part1;
