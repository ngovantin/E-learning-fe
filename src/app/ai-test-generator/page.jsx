'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import TestConfig from './TestConfig';
import TestContent from './TestContent';

const page = () => {
  const [data, setData] = useState();
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='min-h-[100vh] bg-[#F5F7FB]'>
      <TestConfig
        setData={setData}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        setUserAnswers={setUserAnswers}
        setShowResult={setShowResult}
      />
      <div className='h-10 bg-gradient-to-b from-[#F8EBE9] to-[#F5F7FB]' />
      <TestContent
        data={data}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
        showResult={showResult}
        setShowResult={setShowResult}
        isLoading={isLoading}
      />
      <AnimatePresence>
        {!data && (
          <div className='flex justify-center xl:py-5'>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              src='/ai_greet.gif'
              className='my-24 xl:my-0 xl:h-72 xl:py-5'
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default page;
