import { faCheckCircle, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarProfile = ({ joinDate, name, avatar, publishedDate, totalComment = 0, admin }) => {
  return (
    <div className='sticky top-[6rem] flex flex-col items-center text-gray-600'>
      <img className='h-36 rounded-full object-cover' src={avatar} />
      <div className='my-3 flex items-center gap-2'>
        <h1 className='capitalize'>{name}</h1>
        <FontAwesomeIcon className={`${admin ? 'text-blue-400' : 'text-gray-400'} text-lg`} icon={faCheckCircle} />
      </div>
      <p className=''>No pain, no gain!!</p>
      <p>Join date: {joinDate?.toString().split('T')[0]}</p>
      {publishedDate && (
        <div className='mt-5'>
          <p>Published date: {publishedDate.toString().split('T')[0]}</p>
          <div className='flex justify-center gap-7 text-gray-500'>
            <p>
              <FontAwesomeIcon icon={faThumbsUp} /> 0
            </p>
            <p>
              <FontAwesomeIcon icon={faComment} />
              {totalComment}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default SidebarProfile;
