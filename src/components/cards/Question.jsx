'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const Question = ({ data, userAnswers, setUserAnswers, index, showResult = false }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showExplain, setShowExplain] = useState(false);

  const handleChoose = (key) => {
    setUserAnswer(key);
    const newAnswers = userAnswers.map((newAnswer, i) => (index - 1 === i ? key : newAnswer));
    setUserAnswers(newAnswers);
  };

  return (
    <div className='mt-7 flex w-full flex-col justify-center border-l-4 border-gray-400 px-2 text-xs text-gray-700'>
      <h3 className='mb-3 text-base font-semibold'>{`${index}) ${data.question ? data.question : ''}`}</h3>
      <div className='space-y-2'>
        {Object.entries(data.options).map(([key, value]) => (
          <label
            key={key}
            className={`${userAnswer === key || userAnswers[index-1] === key ? (showResult ? (data.answer === key ? 'bg-[#D4EDDA]' : 'bg-[#e98993]') : 'bg-[#F8EBE9]') : ''} flex w-full cursor-pointer items-center rounded-r-full p-2 text-left shadow-sm transition peer-checked:bg-[#12a483] peer-checked:text-white`}
            onClick={() => {
              if (!showResult) handleChoose(key);
            }}
          >
            <input type='checkbox' className='peer hidden' name='language' value='JavaScript' />
            {key + ': ' + value}
          </label>
        ))}
      </div>

      {showResult && (
        <button
          onClick={() => setShowExplain(!showExplain)}
          className='mt-5 w-full cursor-pointer font-semibold text-[#12a483]'
        >
          {showExplain ? 'Hide' : 'See Explanation'}
        </button>
      )}
      <AnimatePresence>
        {showExplain && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className='my-3'>Correct answer: {data.answer}</p>
            {data.explanation && <p>{data.explanation}</p>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Question;
