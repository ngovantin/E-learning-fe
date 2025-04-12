import { authUser } from '@/libs/redux/apiRequest';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import OTPInput from 'react-otp-input';
import { useDispatch } from 'react-redux';

const RegisterForm = ({setAuthForm}) => {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm({ mode: 'onBlur' });

  const password = watch('password');

  const handleRegister = async (user, e) => {
    try {
      const action = e.nativeEvent.submitter.value;
      if (action === 'getOTP') {
        const res = await axios.post('/v1/auth/get-otp', { email: user.email });
        if (res.status === 200) setCurrentStep(2);
      } else if (action === 'register') {
        const { firstName, lastName, password, email } = user;
        const res = await authUser({ name: `${firstName} ${lastName}`, password, email, otp }, dispatch, 'register');
        if(res.status === 201) setAuthForm(false)
        console.log(res)
      }
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div className={`${currentStep === 1 ? '' : 'hidden'} my-6 text-[12px] md:text-[13px]`}>
        <div className={`flex items-center gap-4`}>
          <FontAwesomeIcon icon={faUser} />
          <input
            {...register('firstName', { required: 'first name is require!' })}
            type='text'
            placeholder='First name'
            className='h-5 w-[45%] border-b-1 border-gray-400 outline-none'
          />
          <input
            {...register('lastName', { required: 'last name is requie!' })}
            type='text'
            placeholder='Last name'
            className='h-5 w-[45%] border-b-1 border-gray-400 outline-none'
          />
        </div>
        <p className='ml-7 h-3 text-xs text-red-500'>
          {errors.firstName || errors.lastName ? 'First name and last name are required!' : ''}
        </p>
        <div>
          <div className='flex h-8 items-center gap-4'>
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email is not in correct format!' }
              })}
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
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    'Password must be 8+ characters with at least one uppercase, one lowercase, one digit, and one special character!'
                }
              })}
              className={`${errors.password ? 'border-red-300' : 'border-gray-400'} h-5 w-full border-b-1 outline-none`}
              type='text'
              placeholder='Enter your password!'
            />
          </div>
          <p className='ml-7 text-xs text-red-500'>{errors.password ? errors.password.message : ''}</p>
        </div>
        <div>
          <div className='flex h-8 items-center gap-4'>
            <FontAwesomeIcon icon={faLock} />
            <input
              {...register('confirm', {
                required: 'You have to confirm your password before register',
                validate: (value) => value === password || 'Passwords do not match'
              })}
              className={`${errors.password ? 'border-red-300' : 'border-gray-400'} h-5 w-full border-b-1 outline-none`}
              type='text'
              placeholder='Confirm password!'
            />
          </div>
          <p className='ml-7 h-3 text-xs text-red-500'>{errors.confirm ? errors.confirm.message : ''}</p>
        </div>

        <button
          type='submit'
          value={'getOTP'}
          className='mx-[10%] mt-[4%] w-[80%] rounded-full bg-[#12a483] py-2 text-white'
        >
          Register
        </button>
      </div>
      <div className={`${currentStep === 2 ? '' : 'hidden'}`}>
        <p className='text-center text-gray-600'>
          We have sent a 6-digit OTP code to your email address. Please enter it below to verify your account.
        </p>
        <div className='my-5 flex justify-center'>
          <OTPInput
            value={otp}
            onChange={(val) => {
              // Lọc giữ lại chỉ số
              const numericOnly = val.replace(/\D/g, '');
              setOtp(numericOnly);
            }}
            numInputs={6}
            renderSeparator={<span style={{ width: '8px' }} />}
            renderInput={(props) => (
              <input
              {...props}
              onKeyDown={(e) => {
                if (
                  !/[0-9]/.test(e.key) &&
                  e.key !== 'Backspace' &&
                  e.key !== 'Delete' &&
                  e.key !== 'ArrowLeft' &&
                  e.key !== 'ArrowRight'
                ) {
                  e.preventDefault();
                }
              }}
              />
            )}
            inputStyle={{
              border: '1px solid transparent',
              borderRadius: '8px',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              color: 'gray',
              fontWeight: '700',
              caretColor: 'blue',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
        <button
          type='submit'
          value={'register'}
          className='mx-[10%] my-[4%] w-[80%] rounded-full bg-[#12a483] py-2 font-semibold text-white'
        >
          SEND
        </button>
      </div>
      <p className='h-3 text-center text-red-400'>{errorMessage}</p>
    </form>
  );
};
export default RegisterForm;
