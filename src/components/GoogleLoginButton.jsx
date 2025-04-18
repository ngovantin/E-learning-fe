'use client';
import { googleLogin } from '@/libs/redux/apiRequest';
import { closePopup } from '@/libs/redux/popupSlice';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';

const GoogleLoginButton = () => {
  const dispatch = useDispatch();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      googleLogin(tokenResponse.access_token, dispatch);
    },
    onError: () => console.log('Login Failed')
  });

  return (
    <button
      onClick={() => {login(); dispatch(closePopup())}}
      className='custom-btn mx-9 my-3 flex h-10 items-center justify-center gap-5 rounded-full border border-gray-400 lg:text-lg text-gray-600'
    >
      <FontAwesomeIcon icon={faGoogle} />
      <p>Login with Google</p>
    </button>
  );
};
export default GoogleLoginButton;
