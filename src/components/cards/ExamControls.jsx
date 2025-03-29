import { faBan, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

const ExamControls = ({ data, userAnswers, setShowResult, showResult }) => {
  console.log({ data, userAnswers, setShowResult, showResult })
  const [questionStas, setQuestionStas] = useState({});
  const time = new Date();
  time.setSeconds(time.getSeconds() + data.duration);

  const { seconds, minutes, start, pause, isRunning } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.log('Times up!!'),
  });

  const resultCalculator = () => {
    let correct = 0,
      wrong = 0,
      skip = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (!userAnswers[i]) skip += 1;
      else if (userAnswers[i] !== data.allAnswers[i]) wrong += 1;
      else correct += 1;
    }
    setQuestionStas({ correct, wrong, skip });
  };

  return (
    <motion.div
      className='md:h-max flex gap-2 rounded-2xl bg-[#fff] p-5 text-sm text-gray-700 shadow-lg md:flex md:flex-col md:w-48'
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className='flex-1 md:flex-none'>
        <div className='mb-3'>
          <p>Exam Duration:</p>
          <p className='font-bold'>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </p>
        </div>
        {showResult ? (
          <div>
            <p>Correct rate: </p>
            <p className='font-bold'>{(100 / userAnswers.length) * questionStas.correct}%</p>
          </div>
        ) : (
          <button
            onClick={() => {
              setShowResult(true);
              resultCalculator();
              pause();
            }}
            className='w-[100%] rounded-r-full bg-[#ff723d] py-1 font-bold text-[#fff] uppercase'
          >
            submit
          </button>
        )}
      </div>
      {showResult ? (
        <div className='md:flex md:flex-col md:gap-5 grid flex-2 grid-cols-3 gap-1 text-center'>
          <div className='rounded-lg shadow-lg'>
            <h3 className='rounded-t-lg bg-[#02e40a] py-1.5 text-xs font-bold text-white uppercase'>
              <FontAwesomeIcon icon={faCircleCheck} /> correct
            </h3>
            <p className='font-bold'>{questionStas.correct}</p>
            <p className='text-[11px]'>Questions</p>
          </div>
          <div className='rounded-lg shadow-lg'>
            <h3 className='rounded-t-lg bg-[#f06157] py-1.5 text-xs font-bold text-white uppercase'>
              <FontAwesomeIcon icon={faCircleXmark} /> wrong
            </h3>
            <p className='font-bold'>{questionStas.wrong}</p>
            <p className='text-[11px]'>Questions</p>
          </div>
          <div className='rounded-lg shadow-lg'>
            <h3 className='rounded-t-lg bg-[#9E9E9E] py-1.5 text-xs font-bold text-white uppercase'>
              <FontAwesomeIcon icon={faBan} /> skip
            </h3>
            <p className='font-bold'>{questionStas.skip}</p>
            <p className='text-[11px]'>Questions</p>
          </div>
        </div>
      ) : (
        <div className='md:flex-none grid flex-2 grid-cols-5 gap-2 font-semibold'>
          {userAnswers.map((answer, index) => (
            <p
              className={`${answer ? 'bg-[#12a483] text-white' : 'border-gray-400'} grid h-full w-full place-items-center rounded-md border`}
              key={index}
            >
              {index + 1}
            </p>
          ))}
        </div>
      )}
      </motion.div>
  );
};
export default ExamControls;
