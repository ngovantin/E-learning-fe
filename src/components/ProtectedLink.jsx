import { openPopup } from '@/libs/redux/popupSlice';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const ProtectedLink = ({ href, className, children }) => {
  const user = useSelector((state) => state.auth.currentUser?.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleNavigate = () => {
    if (!user) dispatch(openPopup())
    else router.push(href);
  };
  return (
    <button onClick={handleNavigate} className={className}>
      {children}
    </button>
  );
};
export default ProtectedLink;
 