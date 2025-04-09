import useClickOutside from '@/Hooks/useClickOutside';
import { faAdd, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import * as motion from 'motion/react-client';
import { useForm } from 'react-hook-form';
import { AnimatePresence } from 'motion/react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const LANGUAGES = [
  { label: 'English', value: 'en' },
  { label: 'Korean', value: 'ko' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Chinese', value: 'zh' }
];

const Flashcard = ({ name, createdDate, vocabCount, description, language, flashcardId }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState('');
  const token = useSelector((state) => state.auth.currentUser?.accessToken);
  const { register, handleSubmit } = useForm({ defaultValues: { name, description, language }});
  useClickOutside(ref, () => {
    setDisplay('');
  });
  const handleUpdate = async (data) => {
    try {
      await axios.patch(
        `/v1/flashcard`,
        { flashcardId, name: data.name, description: data.description, language: data.language },
        {
          headers: {
            token: `Bearer ${token}`
          }
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () =>{
    try {
      await axios.delete(`/v1/flashcard/${flashcardId}`,{headers:{
        token: `Bearer ${token}`
      }})
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div ref={ref} className='relative rounded-xl border shadow-lg'>
      {display === '' && (
        <div className='flex justify-between p-4'>
          <Link href={`flashcard/${flashcardId}`} className='cursor-pointer'>
            <h2 className='text-xl font-bold text-gray-800'>{name}</h2>
            <p className='text-sm text-gray-500'>Created: {createdDate.toString().split('T')[0]}</p>
            <p className='text-sm text-gray-600'>Vocabulary count: {vocabCount}</p>
          </Link>
          <div className='flex flex-col justify-between'>
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => {
                setDisplay('update');
              }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className='text-red-500'
              onClick={() => {
                setDisplay('delete');
              }}
            />
          </div>
        </div>
      )}
      {display === 'delete' && (
        <div className='p-4'>
          <p>
            Are you sure you want to delete the flashcard <strong>{name}</strong>?
          </p>
          <button onClick={handleDelete} className='h-7 w-full cursor-pointer bg-red-500 font-bold text-white uppercase'>delete</button>
        </div>
      )}
      <AnimatePresence>
        {display === 'update' && (
          <motion.form
            initial={{ scaleY: 0.6, transformOrigin: 'bottom' }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0.6 }}
            transition={{ duration: 0.2 }}
            className='absolute bottom-0 h-[170%] w-[100%] rounded-lg bg-white p-4 shadow-lg'
            onSubmit={handleSubmit(handleUpdate)}
          >
            <div className='mb-2 flex items-center justify-between'>
              <h3>Update flashcard</h3>
              <button type='submit'>
                <FontAwesomeIcon
                  icon={faAdd}
                  className='w-15 cursor-pointer rounded-full bg-amber-400 py-0.5 text-white'
                />
              </button>
            </div>
            <div className='flex justify-between gap-2 pb-1 text-sm'>
              <input {...register('name')} type='text' className='flex-[2] rounded-sm border outline-none' />
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
                placeholder='Description'
                className='w-[100%] resize-none rounded-sm border outline-none'
              ></textarea>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Flashcard;
