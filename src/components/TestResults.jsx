'use client';
import { useDispatch, useSelector } from 'react-redux';
import TestResultCard from './cards/TestResultCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { authSuccess } from '@/libs/redux/authSlice';

const TestResults = () => {
  const token = useSelector((state) => state.auth.currentUser?.accessToken);
  const [testResults, setTestResults] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/testResult/getAll`, {
          headers: { token: `Bearer ${token}` }
        });
        setTestResults(res.data.slice(0, 4));
      } catch (error) {
        dispatch(authSuccess(null));
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={`${token ? '' : 'hidden'} bg-[#F8EBE9] px-[6vw]`}>
      <h1 className='py-4 font-semibold text-[#383838] md:pb-5 md:text-2xl'>Recent Test Log</h1>
      <div className='grid grid-cols-2 gap-2 md:gap-8 lg:grid-cols-4 lg:gap-4 xl:gap-16'>
        {testResults.map((testResult) => {
          return <TestResultCard key={testResult._id} data={testResult} />;
        })}
      </div>
    </div>
  );
};
export default TestResults;
