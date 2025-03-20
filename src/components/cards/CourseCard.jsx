import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CourseCard = () => {
  return (
    <div className='inline-block rounded-xl border border-[#f0f0f0] bg-white'>
      <img
        src='https://turnerenglish.com.au/wp-content/uploads/2023/02/Beginners-OL.jpg'
        alt=''
        className='rounded-t-xl object-contain'
      />
      <div className='md:p-4 p-2'>
        <div className='my-3 flex gap-1'>
          <FontAwesomeIcon icon={faStar} className='md:h-3.5 h-2 text-amber-300' />
          <FontAwesomeIcon icon={faStar} className='md:h-3.5 h-2 text-amber-300' />
          <FontAwesomeIcon icon={faStar} className='md:h-3.5 h-2 text-amber-300' />
          <FontAwesomeIcon icon={faStar} className='md:h-3.5 h-2 text-amber-300' />
        </div>
        <h3 className='md:text-sm text-xs font-semibold'>Survival English: Learn to Communicate in Everyday Situations</h3>
        <div className='my-5 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img
              className='h-6 w-6 rounded-full object-cover'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s'
              alt=''
            />
            <p className='text-[9px]'>Justin Biber</p>
          </div>
          <p className='font-bold text-xs text-[#ff723d]'>$10.00</p>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
