'use client';

import Question from '@/components/cards/Question';

const Part1 = ({ pictures, userAnswers, correctAnswers }) => {
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
          <Question
            data={{ ...question, answer: correctAnswers[index] }}
            userAnswers={userAnswers}
            index={index + 1}
            showResult={true}
          />
        </div>
      ))}
    </div>
  );
};
export default Part1;
