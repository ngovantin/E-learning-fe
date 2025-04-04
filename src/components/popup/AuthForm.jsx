'use client';
import { authUser } from '@/libs/redux/apiRequest';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleOAuthProvider } from '@react-oauth/google';
import * as motion from 'motion/react-client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import GoogleLoginButton from '../GoogleLoginButton';

const AuthForm = ({ authForm, setAuthForm }) => {
  const [type, setType] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authForm) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [authForm]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors}
  } = useForm();
  const password = watch('password');

  const handleRegister = async (data) => {
    try {
      let user;
      if (type) {
        user = { email: data.email, name: `${data.firstName} ${data.lastName}`, password: data.password };
        authUser(user, dispatch, 'register');
      } else {
        user = { email: data.email, password: data.password };
        authUser(user, dispatch, 'login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENTID}>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        onClick={() => setAuthForm(false)}
        className={`z-30 fixed top-0 right-0 left-0 flex h-[100vh] items-center justify-center bg-[#00000044] backdrop-blur-[2.5px]`}
      >
        <motion.form
          onSubmit={handleSubmit(handleRegister)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className='flex w-[85%] flex-col rounded-3xl bg-white px-7 py-15 md:w-[55%] lg:w-[45%] xl:w-[35%] max-w-[500px]'
          key='box'
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className='mb-4 text-2xl font-bold md:text-3xl'>{type ? 'Sign up' : 'Sign in'}</h2>
          <div className='my-6 text-[12px] md:text-[13px]'>
            {
              !type && 
            <div className={`mb-5 flex h-8 items-center gap-4`}>
              <FontAwesomeIcon icon={faUser} />
              <input
                {...register('firstName', { required: type && 'first name is require!' })}
                type='text'
                placeholder='First name'
                className='h-5 w-[45%] border-b-1 border-gray-400 outline-none'
              />
              <input
                {...register('lastName', { required: type && 'last name is requie!' })}
                type='text'
                placeholder='Last name'
                className='h-5 w-[45%] border-b-1 border-gray-400 outline-none'
              />
            </div>
            }
            <div className='mb-5 flex h-8 items-center gap-4'>
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                {...register('email', {
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Email is not in correct format!' }
                })}
                className='h-5 w-full border-b-1 border-gray-400 outline-none'
                type='text'
                placeholder='Enter your email!'
              />
            </div>
            <div className='mb-5 flex h-8 items-center gap-4'>
              <FontAwesomeIcon icon={faLock} />
              <input
                {...register(
                  'password',
                  type
                    ? {
                        pattern: {
                          value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                          message:
                            'Password must be 8+ characters with at least one uppercase, one lowercase, one digit, and one special character!'
                        }
                      }
                    : {}
                )}
                className='h-5 w-full border-b-1 border-gray-400 outline-none'
                type='password'
                placeholder='Enter your password!'
              />
            </div>
            {
              !type &&
            <div className={`mb-5 flex h-8 items-center gap-4`}>
              <FontAwesomeIcon icon={faLock} />
              <input
                {...register('comfirmPass', {
                  validate: (value) => {
                    type || value === password || 'Confirmation password does not match!';
                  }
                })}
                className='h-5 w-full border-b-1 border-gray-400 outline-none'
                type='password'
                placeholder='Confirm your password!'
              />
            </div>
            }
            <input
              type='submit'
              value={type ? 'Register' : 'Login'}
              className='mx-[10%] mt-[7%] w-[80%] rounded-full bg-[#12a483] py-2 text-white'
            />
          </div>
          <p className='text-center text-xs'>Or continue with:</p>

          <GoogleLoginButton setAuthForm={setAuthForm} />
          <div
            onClick={() => {
              setType(!type);
              reset();
            }}
            className='flex cursor-pointer justify-center gap-1 text-center font-mono text-xs underline md:text-sm lg:text-[14px]'
          >
            <p>{type ? 'Already have an account?' : "Dont't have an account?"}</p>
            <p className='text-[#ff723d]'>{type ? 'Login' : 'Register'}</p>
          </div>
        </motion.form>
      </motion.div>
    </GoogleOAuthProvider>
  );
};
export default AuthForm;
