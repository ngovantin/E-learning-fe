import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const FullResult = () => {
  return (
    <div>
      <div className='grid flex-2 grid-cols-3 gap-1 text-center md:flex md:flex-col md:gap-5'>
        <div className='rounded-lg shadow-lg'>
          <h3 className='rounded-t-lg bg-[#02e40a] py-1.5 text-xs font-bold text-white uppercase'>
            <FontAwesomeIcon icon={faCircleCheck} /> correct
          </h3>
          <p className='font-bold'>10</p>
          <p className='text-[11px]'>Questions</p>
        </div>
        <div className='rounded-lg shadow-lg'>
          <h3 className='rounded-t-lg bg-[#f06157] py-1.5 text-xs font-bold text-white uppercase'>
            <FontAwesomeIcon icon={faCircleXmark} /> wrong
          </h3>
          <p className='font-bold'>10</p>
          <p className='text-[11px]'>Questions</p>
        </div>
        <div className='rounded-lg shadow-lg'>
          <h3 className='rounded-t-lg bg-[#9E9E9E] py-1.5 text-xs font-bold text-white uppercase'>
            <FontAwesomeIcon icon={faBan} /> skip
          </h3>
          <p className='font-bold'>10</p>
          <p className='text-[11px]'>Questions</p>
        </div>
      </div>
      <div>
        <div>
          <p>
            Correct rate: <strong>10%</strong>
          </p>
          <p>
            Score: <strong>90</strong>
          </p>
          <p>
            Time spent: <strong>110:00</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
export default FullResult;
