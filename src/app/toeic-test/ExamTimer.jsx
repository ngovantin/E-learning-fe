import { useTimer } from 'react-timer-hook';
const ExamTimer = ({ timer, handleSubmit, testId}) => {
  return (
    <div className='flex-1 md:flex-none'>
      <div className='mb-3'>
        <p>Exam Duration:</p>
        <p className='font-bold'>
          {String(timer.minutes + timer.hours * 60).padStart(2, '0')}:{String(timer.seconds).padStart(2, '0')}
        </p>
      </div>
      <button
        onClick={() => handleSubmit(testId)}
        className='my-1 w-[100%] rounded-r-full bg-[#ff723d] py-1 font-bold text-[#fff] uppercase'
      >
        submit
      </button>
    </div>
  );
};
export default ExamTimer;
