import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as motion from 'motion/react-client';
import { logOut } from '@/libs/redux/apiRequest';
import { createAxios } from '@/libs/redux/authInterceptor';
const Profile = ({ onClose }) => {
  const popupRef = useRef(null);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const user = useSelector((state) => state.auth.currentUser?.user);
  const token = useSelector((state) => state.auth.currentUser?.accessToken);
  const dispatch = useDispatch();
  let axiosJWT = createAxios(currentUser, dispatch);

  const handleLogOut = () => {
    logOut(dispatch, token, axiosJWT);
    onClose();
  };

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

  return (
    <motion.div
      ref={popupRef}
      className='absolute top-15 right-2 rounded-lg bg-white p-3 text-[#595959] shadow-xl'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
    >
      <div className='flex items-center gap-2 border-b-[0.5px] border-[#c9c9c9] pb-3'>
        <img
          className='h-15 rounded-full'
          src={user?.avatar}
          alt=''
        />
        <div className='mx-3'>
          <h3 className='my-1 font-bold'>{user?.name}</h3>
          <p className='text-[9px] font-light'>{user?.email}</p>
          <p className='text-[9px] font-light'>{user?.createdAt.split('T')[0]}</p>
        </div>
      </div>
      <p onClick={handleLogOut} className='pt-3 text-center text-[12px] font-semibold cursor-pointer'>
        Log out
      </p>
    </motion.div>
  );
};
export default Profile;

// <div className='absolute top-15 right-2 rounded-lg bg-white p-3 text-[#595959]'>
// </div>
