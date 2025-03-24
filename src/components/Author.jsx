import { faBookmark, faCircleCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Author = ({ avatar, name, admin, publishedDate }) => {
  console.log(publishedDate)
  return (
    <div className='mb-4 flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <img className='h-8 rounded-full' src={avatar} />
        <div>
          <h5 className='font-semibold text-[#292929] capitalize'>{name}</h5>
          <p className='text-[8px] text-gray-700'>{publishedDate?.toString().split('T')[0]}</p>
        </div>
        {admin && <FontAwesomeIcon className='text-xs text-blue-400' icon={faCircleCheck} />}
      </div>
      <div className='flex gap-2 text-gray-400'>
        <FontAwesomeIcon icon={faBookmark} />
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  );
};
export default Author;
