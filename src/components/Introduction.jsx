'use client';
import { faArrowRight, faAward, faCalendar, faClock, faPenToSquare, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Edit from './popup/Edit';
import WelcomeVideo from './popup/WelcomeVideo';
import AuthForm from './popup/AuthForm';

const Introduction = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [authForm, setAuthForm] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const user = useSelector((state) => state.auth.currentUser?.user);
  const today = new Date();

  const dateCaculator = (examDate) => {
    const futureDate = new Date(examDate);
    const remainingTime = futureDate - today;
    const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
    return remainingDays;
  };

  return (
    <div className='relative'>
      <div className='2xl:[12vw] flex items-center justify-between bg-[#F8EBE9] pt-15 xl:px-[7vw]'>
        <div className='w-[50vw] pl-[7vw] xl:px-0 2xl:w-[40vw]'>
          <p className='mb-7 inline-flex [rotate:-12deg] rounded-full bg-[#ff723d] px-5 py-0.5 text-[7px] font-bold text-[#F5F7FB] md:text-[10px] 2xl:mb-20 2xl:text-xl'>
            eLearning Platform
          </p>
          <h1 className='mb-3 text-xl font-bold capitalize md:text-3xl 2xl:text-6xl'>
            {user ? `Hi, ${user?.name}` : 'Smart Learing Deeper & More - Amazing'}
          </h1>
          <p className='my-5 hidden md:my-7 md:block md:text-xs 2xl:my-10 2xl:text-lg'>
            Welcome to Tinn.edu.vn! A free exam preparation platform with high-quality courses, helping you study
            effectively anytime, anywhere. Integrated with AI technology, we personalize your learning path and optimize
            your review results. Start your journey to mastering knowledge today!
          </p>
          <div className={`${user && 'hidden'} mt-5 flex items-center gap-2 font-semibold lg:gap-4`}>
            <button
              onClick={() => {
                setAuthForm(true);
              }}
              className='flex cursor-pointer items-center gap-1 rounded-full bg-[#12a483] px-4 py-1 text-[8px] text-white md:text-[13px] lg:px-7 lg:py-2 lg:text-[15px] xl:py-4 2xl:px-10 2xl:text-2xl'
            >
              <p>Start now</p>
              <FontAwesomeIcon icon={faArrowRight} className='h-2 lg:h-4 2xl:h-6' />{' '}
            </button>
            <FontAwesomeIcon
              onClick={() => {
                setShowVideo(true);
              }}
              icon={faPlay}
              className='h-5 rounded-full bg-[#ff723d] p-1.5 md:h-7 md:p-2.5 lg:h-9 2xl:h-16 2xl:p-5'
            />
            <h4 className='text-[5px] md:text-[9px] lg:text-sm 2xl:text-lg'>How it Work</h4>
          </div>
          {user && (
            <div className='relative mt-5 flex flex-col gap-y-2 text-[10px] font-semibold lg:gap-4 lg:text-[12px]'>
              <div>
                <div className='flex items-center gap-1'>
                  <FontAwesomeIcon icon={faClock} />
                  <p>Time remaining</p>
                </div>
                <p className='ml-3 text-[12px] lg:text-[14px]'>{dateCaculator(user?.examDate) || 0} days</p>
              </div>
              <div>
                <div className='flex items-center gap-1'>
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>Exam date</p>
                  <FontAwesomeIcon icon={faPenToSquare} onClick={() => setShowPopup(true)} />
                </div>
                <p className='ml-3 text-[12px] lg:text-[14px]'>{user?.examDate || today.toString()}</p>
              </div>
              <div>
                <div className='flex items-center gap-1'>
                  <FontAwesomeIcon icon={faAward} />
                  <p>Taget score</p>
                </div>
                <p className='ml-3 text-[12px] lg:text-[14px]'>{user?.targetScore || 0}</p>
              </div>
              <AnimatePresence>{showPopup && <Edit onClose={() => setShowPopup(false)} />}</AnimatePresence>
            </div>
          )}
          <AnimatePresence initial={false}>
            {showVideo ? <WelcomeVideo setShowVideo={setShowVideo} /> : null}
          </AnimatePresence>
          <AnimatePresence initial={false}>{authForm ? <AuthForm setAuthForm={setAuthForm} /> : null}</AnimatePresence>
        </div>{' '}
        <img src='wallpaper.png' className='h-[90vw] w-[45vw] object-cover object-left-top lg:h-[60vw] xl:h-[45vw]' />
      </div>
      <div className='pointer-events-none absolute bottom-[-1] h-32 w-[100%] bg-gradient-to-b from-transparent to-[#F8EBE9]'></div>
    </div>
  );
};
export default Introduction;
