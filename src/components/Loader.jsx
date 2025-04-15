import { ClipLoader } from 'react-spinners';

const Loader = ({ isLoading }) => {
  return (
    isLoading &&
    <div className='flex justify-center my-10'>
      <ClipLoader color='#ff723d' size={50} loading={isLoading} />
    </div>
  );
};
export default Loader;
