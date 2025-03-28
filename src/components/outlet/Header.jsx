'use client';
import { faBars, faCircleXmark, faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { use, useState } from 'react';
import AuthForm from '../AuthForm';
import { useSelector } from 'react-redux';
import Profile from '../cards/Profile';
import { AnimatePresence } from 'motion/react';
import Link from 'next/link';

const Header = () => {
  const [authForm, setAuthForm] = useState(false);
  const [menu, setMenu] = useState(false);
  const user = useSelector((state) => state.auth.currentUser?.user);
  const [profile, setProfile] = useState(false);
  return (
    <header className='fixed z-50 flex h-14 w-full justify-between bg-transparent px-[6vw] text-sm font-medium backdrop-blur-2xl lg:h-15'>
      <Link href={'/'} className='flex items-center'>
        <img src='/logo.png' alt='' className='h-6' />
      </Link>
      <div className='py-3 md:py-2.5' />
      <div className='flex items-center gap-10'>
        <ul
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key='box'
          onClick={() => setMenu(false)}
          className={`xl:gap-8 xl:text-[16px] ${menu ? '' : 'hidden'} absolute top-15 right-5 items-center gap-4 rounded-lg bg-white py-3 pr-7 pl-9 text-right text-xs text-[#656766] shadow-xl md:static md:flex md:bg-transparent md:text-xs md:shadow-none lg:text-sm`}
        >
          <li className='font-semibold text-[#ff723d]'>
            <a href=''>Home </a>
          </li>
          <li className='py-1.5'>
            <a href='#course'>Courses</a>
          </li>
          <li className='py-1.5'>
            <a href='#about'>About us</a>
          </li>
          <li className='py-1.5'>
            <a href='#exams'>Exams</a>
          </li>
          <li className='py-1.5'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className='flex items-center gap-4'>
          <div className='h-5 w-5 md:hidden' onClick={() => setMenu(!menu)}>
            <FontAwesomeIcon icon={menu ? faCircleXmark : faBars} />
          </div>
          <div className='flex h-7 w-7 items-center justify-center rounded-full bg-[#ff723d]'>
            <FontAwesomeIcon icon={faEarthAfrica} className='text-white' />
          </div>
          <button
            onClick={() => setAuthForm(true)}
            className={`${user && 'hidden'} rounded-full bg-black px-3 py-1 text-[11px] text-white md:text-sm`}
          >
            Join Us
          </button>
          <img
            onClick={() => {
              setProfile(true);
            }}
            src={user?.avatar}
            alt=''
            className='h-12 rounded-full'
          />
          <AnimatePresence>{profile && <Profile onClose={() => setProfile(false)} />}</AnimatePresence>
          <AnimatePresence initial={false}>{authForm ? <AuthForm setAuthForm={setAuthForm} /> : null}</AnimatePresence>
        </div>
      </div>
    </header>
  );
};
export default Header;
