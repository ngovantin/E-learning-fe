import useClickOutside from '@/Hooks/useClickOutside';
import { authSuccess } from '@/libs/redux/authSlice';
import axios from 'axios';
import * as motion from 'motion/react-client';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const Edit = ({ onClose }) => {
  const popupRef = useRef(null);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const currentUser = useSelector((state) => state.auth.currentUser);
  
  const handleUpdate = async ({ newDate, newTarget }) => {
    try {
      const res = await axios.patch(
        `v1/user/updateExamInfor`,
        { newDate, newTarget },
        { headers: { token: `Bearer ${currentUser?.accessToken}` } }
      );
      const newCurrentUser = { ...currentUser, user: { ...res?.data?.updatedUser } };
      dispatch(authSuccess(newCurrentUser));
    } catch (error) {
      console.log(error.data);
    }
  };

  useClickOutside(popupRef, () => {
    onClose();
  });

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
        onClick={onClose}
        type='submit'
        value='save'
        className='absolute right-4 bottom-3 rounded-sm bg-[#12a483] px-1.5 py-1 text-white'
      />
    </motion.form>
  );
};

export default Edit;
