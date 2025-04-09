import { ClipLoader } from 'react-spinners';

const Loader = ({ isLoading }) => {
  return (
    <div className='flex justify-center'>
      <ClipLoader color='#ff723d' size={50} loading={isLoading} />
    </div>
  );
};
export default Loader;
