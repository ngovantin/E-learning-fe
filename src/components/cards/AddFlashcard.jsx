'use client';
import useClickOutside from '@/Hooks/useClickOutside';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import * as motion from 'motion/react-client';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector } from 'react-redux';

const LANGUAGES = [
  { label: 'English', value: 'en' },
  { label: 'Korean', value: 'ko' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Chinese', value: 'zh' }
];

const AddFlashcard = () => {
  const token = useSelector((state) => state.auth.currentUser?.accessToken);
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => {
    setToggle(false);
  });
  const { register, handleSubmit } = useForm();

  const handleAddFlashcard = async (data) => {
    try {
      if(!data.name) return;
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/flashcard`, data, { headers: { token: `Bearer ${token}` } });
      setToggle(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='relative flex min-h-24 items-center justify-center rounded-xl border p-4 shadow-lg'>
      <FontAwesomeIcon
        icon={faAdd}
        onClick={() => {
          setToggle(true);
        }}
        className='cursor-pointer text-3xl text-gray-500'
      />
      <AnimatePresence>
        {toggle && (
          <motion.form
            initial={{ scaleY: 0.6, transformOrigin: 'bottom'}}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0.6}}
            transition={{ duration: 0.2 }}
            ref={ref}
            className='absolute bottom-0 h-[170%] w-[100%] rounded-lg bg-white p-4 shadow-lg'
            onSubmit={handleSubmit(handleAddFlashcard)}
          >
            <div className='mb-2 flex items-center justify-between'>
              <h3>New flashcard</h3>
              <button type='submit'>
                <FontAwesomeIcon
                  icon={faAdd}
                  className='w-15 cursor-pointer rounded-full bg-amber-400 py-0.5 text-white'
                />
              </button>
            </div>
            <div className='flex justify-between gap-2 pb-1 text-sm'>
              <input
                {...register('name')}
                type='text'
                placeholder='Name'
                className='flex-[2] rounded-sm border outline-none'
              />
              <select {...register('language')} className='flex-1 rounded-sm border outline-none'>
                {LANGUAGES.map((language) => (
                  <option value={language.value} key={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                {...register('description')}
                placeholder='Decription'
                className='w-[100%] resize-none rounded-sm border outline-none'
              ></textarea>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AddFlashcard;
