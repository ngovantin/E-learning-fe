'use client';
import useFetch from '@/Hooks/useFetch';
import { useSelector } from 'react-redux';
import TestResultCard from './cards/TestResultCard';
import Loader from './Loader';

const TestResults = () => {
  const token = useSelector((state) => state.auth.currentUser?.accessToken);

  const { isLoading, data: testResults } = useFetch('v1/testResult/getAll', true);

  return (
    <div className={`${token ? '' : 'hidden'} bg-[#F8EBE9] px-[6vw]`}>
      <h1 className='py-4 font-semibold text-[#383838] md:pb-5 md:text-2xl'>Recent Test Log</h1>
      <div className='grid grid-cols-2 gap-2 md:gap-8 lg:grid-cols-4 lg:gap-4 xl:gap-16'>
        {testResults?.slice(0, 4).map((testResult) => {
          return <TestResultCard key={testResult._id} data={testResult} />;
        })}
      </div>
      <Loader isLoading={isLoading} />
    </div>
  );
};
export default TestResults;

// const [testResults, setTestResults] = useState([]);
// const dispatch = useDispatch();

// useEffect(() => {
//   const fetchData = async () => {
//     if (!token) return;
//     try {
//       const res = await axios.get(`v1/testResult/getAll`, {
//         headers: { token: `Bearer ${token}` }
//       });
//       setTestResults(res.data.slice(0, 4));
//     } catch (error) {
//       dispatch(authSuccess(null));
//       console.log(error);
//     }
//   };
//   fetchData();
// }, []);
