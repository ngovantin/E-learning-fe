import { authUser } from '@/libs/redux/apiRequest';
import { closePopup } from '@/libs/redux/popupSlice';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onBlur' });
  const onSubmit = async (user) => {
    try {
      const res = await authUser(user, dispatch, 'login');
      console.log(res);
      if(res.status !== 200){
        setErrorMessage(res.data.message);
        return;
      } 
      setErrorMessage('');
      dispatch(closePopup());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
      <div>
        <div className='flex h-8 items-center gap-4'>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            {...register('email', { required: 'Email is required' })}
            className={`${errors.email ? 'border-red-300' : 'border-gray-400'} h-5 w-full border-b-1 outline-none`}
            type='text'
            placeholder='Enter your email!'
          />
        </div>
        <p className='ml-7 h-3 text-xs text-red-500'>{errors.email ? errors.email.message : ''}</p>
      </div>
      <div>
        <div className='flex h-8 items-center gap-4'>
          <FontAwesomeIcon icon={faLock} />
          <input
            {...register('password', { required: 'Email is required' })}
            className={`${errors.password ? 'border-red-300' : 'border-gray-400'} h-5 w-full border-b-1 outline-none`}
            type='password'
            placeholder='Enter your password!'
          />
        </div>
        <p className='ml-7 h-3 text-xs text-red-500'>{errors.password ? errors.password.message : ''}</p>
      </div>
      <input
        type='submit'
        value={'Login'}
        className='mx-[10%] mt-[7%] mb-3 w-[80%] rounded-full bg-[#12a483] py-2 text-white'
      />
      <div className='flex justify-center mb-2'>
      <p className='h-3 text-red-400'>{errorMessage}</p>
      </div>
    </form>
  );
};
export default LoginForm;
