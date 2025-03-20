'use client';
import { authSuccess } from '@/libs/redux/authSlice';
import { faArrowRight, faAward, faCalendar, faClock, faPenToSquare, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const EditPopup = ({ onClose }) => {
  const dispatch = useDispatch();
  const popupRef = useRef(null);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const handleUpdate = async ({ newDate, newTarget }) => {
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/updateExamInfor`,
        {
          newDate,
          newTarget
        },
        {
          headers: {
            token: `Bearer ${currentUser?.accessToken}`
          }
        }
      );
      const newCurrentUser = {...currentUser, user: {...res?.data?.updatedUser}};
      dispatch(authSuccess(newCurrentUser));
    } catch (error) {
      console.log(error.data);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  const today = new Date();
  return (
    <motion.form
      onSubmit={handleSubmit(handleUpdate)}
      ref={popupRef}
      className='absolute bottom-16 left-0 bg-white p-4 pb-12 shadow-xl'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className='text-[15px]'>Update Exam Information</h3>
      <div className='font-light'>
        <div className='mt-3'>
          <p>Exam date:</p>
          <input
            {...register('newDate')}
            defaultValue={currentUser.user.examDate || today}
            className='w-full rounded-xs border-[0.1px] border-gray-400 outline-none'
            type='date'
          />
        </div>
        <div className='mt-3'>
          <p>Target Score:</p>
          <input
            {...register('newTarget')}
            className='w-full rounded-xs border-[0.1px] border-gray-400 outline-none'
            type='number'
          />
        </div>
      </div>
      <input
        onClick={()=>{onClose()}}
        type='submit'
        value='save'
        className='absolute right-4 bottom-3 rounded-sm bg-[#12a483] px-1.5 py-1 text-white'
      />
    </motion.form>
  );
};

const Introduction = () => {
  const [showPopup, setShowPopup] = useState(false);

  const user = useSelector((state) => state.auth.currentUser?.user);

  const today = new Date();
  
  const dateCaculator = (examDate) => {
    const futureDate = new Date(examDate);

    const remainingTime = futureDate - today;
    const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));

    return remainingDays;
  };

  return (
    <div className='w-[50vw] pl-[7vw] xl:px-0 2xl:w-[40vw]'>
      <p className='mb-7 inline-flex [rotate:-12deg] rounded-full bg-[#ff723d] px-5 py-0.5 text-[7px] font-bold text-[#F5F7FB] md:text-[10px] 2xl:mb-20 2xl:text-xl'>
        eLearning Platform
      </p>
      <h1 className='mb-3 text-xl font-bold md:text-3xl 2xl:text-6xl'>
        {user ? `Hi, ${user?.name}` : 'Smart Learing Deeper & More - Amazing'}
      </h1>
      <p className='my-5 hidden md:my-7 md:block md:text-xs 2xl:my-10 2xl:text-lg'>
        Welcome to Tinn.edu.vn! A free exam preparation platform with high-quality courses, helping you study
        effectively anytime, anywhere. Integrated with AI technology, we personalize your learning path and optimize
        your review results. Start your journey to mastering knowledge today!
      </p>
      <div className={`${user && 'hidden'} mt-5 flex items-center gap-2 font-semibold lg:gap-4`}>
        <button className='flex items-center gap-1 rounded-full bg-[#12a483] px-4 py-1 text-[8px] text-white md:text-[13px] lg:px-7 lg:py-2 lg:text-[15px] xl:py-4 2xl:px-10 2xl:text-2xl'>
          <p>Start now</p>
          <FontAwesomeIcon icon={faArrowRight} className='h-2 lg:h-4 2xl:h-6' />{' '}
        </button>
        <FontAwesomeIcon
          icon={faPlay}
          className='h-5 rounded-full bg-[#ff723d] p-1.5 md:h-7 md:p-2.5 lg:h-9 2xl:h-16 2xl:p-5'
        />
        {/* <div className="h-6 w-6 p-4 rounded-full bg-[#ff723d] items-center">
            </div> */}
        <h4 className='text-[5px] md:text-[9px] lg:text-sm 2xl:text-lg'>How it Work</h4>
      </div>
      <div
        className={`${user || 'hidden'} relative mt-5 flex flex-col gap-y-2 text-[10px] font-semibold lg:gap-4 lg:text-[12px]`}
      >
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
        <AnimatePresence>{showPopup && <EditPopup onClose={() => setShowPopup(false)} />}</AnimatePresence>
      </div>
    </div>
  );
};
export default Introduction;
