import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LearningCategory = ({ children, itemType, categories, id }) => {
  return (
    <div id={id} className='px-[6vw] pt-[8vw]'>
      <div className='flex justify-between'>
        <div>
          <p className='mb-5 inline-flex [rotate:-12deg] rounded-full bg-[#ff723d] px-4 text-sm font-bold text-white'>
            {`Our ${itemType}`}
          </p>
          <h1 className='text-xl font-semibold lg:text-3xl xl:text-5xl 2xl:text-7xl'>{`Explore Our ${itemType}`}</h1>
        </div>
        <div className='flex h-8 w-[70vw] items-center justify-between rounded-full bg-white pl-3 text-[8px] shadow-lg md:h-12 md:text-[13px] lg:w-[50%] xl:h-[60px] xl:w-[40%] xl:pl-6 xl:text-lg'>
          <input type='text' placeholder={`Search ${itemType}s`} className='w-[40%] outline-none' />
          <select name='' id='' className='w-[35%] font-semibold outline-none'>
            <option value=''>All items</option>
            {categories.map((category, index) => {
              return (
                <option value='' key={index}>
                  {category}
                </option>
              );
            })}
          </select>
          <FontAwesomeIcon icon={faSearch} className='rounded-full bg-[#ff723d] p-[11.5px] md:mr-2' />
        </div>
      </div>
      <div className='text-center'>
          {children}

        <button className='mx-auto rounded-full bg-[#12A483] px-7 py-3 font-semibold text-white'>
          {`See All ${itemType}s`}
        </button>
      </div>
    </div>
  );
};
export default LearningCategory;
