import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ResultOverview = ({ data }) => {
  return (
    <div className='gap-2 rounded-2xl bg-[#fff] p-5 text-sm text-gray-700 shadow-lg'>
      <div className='grid flex-2 grid-cols-3 gap-1 text-center md:flex md:flex-col md:gap-5'>
        <div className='rounded-lg shadow-lg'>
          <h3 className='rounded-t-lg bg-[#02e40a] py-1.5 text-xs font-bold text-white uppercase'>
            <FontAwesomeIcon icon={faCircleCheck} /> correct
          </h3>
          <p className='font-bold'>{data?.correct}</p>
          <p className='text-[11px]'>Questions</p>
        </div>
        <div className='rounded-lg shadow-lg'>
          <h3 className='rounded-t-lg bg-[#f06157] py-1.5 text-xs font-bold text-white uppercase'>
            <FontAwesomeIcon icon={faCircleXmark} /> wrong
          </h3>
          <p className='font-bold'>{data?.wrong}</p>
          <p className='text-[11px]'>Questions</p>
        </div>
        <div className='rounded-lg shadow-lg'>
          <h3 className='rounded-t-lg bg-[#9E9E9E] py-1.5 text-xs font-bold text-white uppercase'>
            <FontAwesomeIcon icon={faBan} /> skip
          </h3>
          <p className='font-bold'>{data?.skip}</p>
          <p className='text-[11px]'>Questions</p>
        </div>
      </div>
      <div>
        <div>
          <p>
            Correct rate: <strong>{Math.floor(data?.correct/200*100)}%</strong>
          </p>
          <p>
            Score: <strong>{data?.score}</strong>
          </p>
          <p>
            Time spent: <strong>{`${String(Math.floor(data?.timeSpent / 60)).padStart(2, "0")}:${String(data?.timeSpent % 60).padStart(2, "0")}`}
            </strong>
          </p>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-2 font-semibold md:flex-none md:grid-cols-10 lg:grid-cols-5 xl:flex-2'>
        {data?.userAnswer.map((answer, index) => (
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
export default ResultOverview;
