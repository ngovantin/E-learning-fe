'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createContext, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';

export const PartContext = createContext();

const TestProvider = ({ children }) => {
  const router = useRouter();

  const token = useSelector((state) => state.auth.currentUser?.accessToken);

  const [userAnswers, setUserAnswers] = useState(Array(200).fill(''));

  const startTimeRef = useRef(Date.now());

  const time = new Date();
  time.setSeconds(time.getSeconds() + 2 * 60 * 60);

  const timer = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.log('Times up!!')
  });
  const handleSubmit = async (test) => {
    timer.pause();
    const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
    try {
      console.log({test, timeSpent, userAnswers})
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/testResult/take-full`,
        {
          test,
          timeSpent,
          answers: userAnswers
        },
        {
          headers: {
            token: `Bearer ${token}`
          }
        }
      );
      router.push(`/toeic-result/${res.data._id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PartContext.Provider value={{ userAnswers, setUserAnswers, timer, handleSubmit }}>{children}</PartContext.Provider>
  );
};
export default TestProvider;
//{ seconds, minutes, start, pause, isRunning }
