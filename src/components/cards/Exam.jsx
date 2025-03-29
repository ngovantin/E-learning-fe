import { faClock, faComments, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Exam = ({ name, year, image, id }) => {
  return (
    <div className='inline-block rounded-2xl border border-[#f0f0f0] bg-white'>
      <img src={image} alt='' className='rounded-t-2xl object-contain' />
      <div className='p-[1.7vw] text-[10px]'>
        <h3 className='text-lg font-semibold'>
          {year} Practice Set TOEIC {name}
        </h3>
        <div className='flex flex-wrap gap-2 pt-5 pb-3 text-gray-500'>
          <div className='flex h-3 gap-1'>
            <FontAwesomeIcon icon={faClock} />
            <p>120 mins</p>
          </div>
          <div className='flex h-3 gap-1'>
            <FontAwesomeIcon icon={faUserPen} />
            <p>13759</p>
          </div>
          <div className='flex h-3 gap-1'>
            <FontAwesomeIcon icon={faComments} />
            <p>12648</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-2 pb-[1.9vw] text-gray-500'>
          <p>7 sections</p>|<p>200 questions</p>
        </div>
        <Link href={`/toeic-test/${id}`}>
          <button className='w-full rounded-full border border-[#12a483] p-1 text-sm font-bold text-[#12a483]'>
            View more
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Exam;
