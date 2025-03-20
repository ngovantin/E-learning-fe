'use client';
import Header from '@/components/outlet/Header';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import testGenerator from './generator';
import { AnimatePresence, motion } from 'framer-motion';
import Question from '@/components/cards/Question';
import ExamControls from '@/components/cards/ExamControls';
import { SyncLoader } from 'react-spinners';

const PART_5_TYPES = [
  { id: 1, value: 'noun', label: 'Noun' },
  { id: 2, value: 'pronoun', label: 'Pronoun' },
  { id: 3, value: 'adjective', label: 'Adjective' },
  { id: 4, value: 'tense', label: 'Tense' },
  { id: 5, value: 'voice', label: 'Voice' },
  { id: 6, value: 'adverb', label: 'Adverb' },
  { id: 7, value: 'infinitive', label: 'Infinitive' },
  { id: 8, value: 'participle', label: 'Participle and Participle Structure' },
  { id: 9, value: 'preposition', label: 'Preposition' },
  { id: 10, value: 'conjunction', label: 'Conjunction' },
  { id: 11, value: 'relative_clause', label: 'Relative Clause' }
];

const TOEIC_PARTS = [
  {
    id: 5,
    label: 'PART 5',
    value: 5,
    question: '10'
  },
  {
    id: 6,
    label: 'PART 6',
    value: 6,
    question: '4'
  },
  {
    id: 7,
    label: 'PART 7',
    value: 7,
    question: '2-5'
  }
];

const EXAM_DURATIONS = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  label: `${(i + 1) * 5} minutes`,
  value: (i + 1) * 5 * 60
}));

const page = () => {
  const [selectedPart, setSeletedPart] = useState(5);
  const [data, setData] = useState();
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    if (isLoading) return;
    setIsLoading(true);
    setData(undefined);
    const res = await testGenerator({ ...data, part: selectedPart });
    setData({ ...res, duration: Number(data.duration) });
    setUserAnswers(Array(res.questions.length).fill(''));
    setShowResult(false);
    setIsLoading(false);
    reset();
  };
  console.log(data);

  return (
    <div className='min-h-[100vh] bg-[#F5F7FB]'>
      <div className='bg-[#F8EBE9] p-[2vw] pt-15 xl:px-[6vw]'>
        <h1 className='my-4 text-xl font-bold uppercase'>practice with tin tin</h1>
        <form className='text-gray-600 md:flex md:gap-10' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-3 gap-2 md:flex md:flex-1 md:flex-col'>
            {TOEIC_PARTS.map((part) => {
              return (
                <label htmlFor={part.value} className='peer' key={part.id}>
                  <input type='radio' {...register('part')} value={part.value} name='part' className='sr-only' />
                  <div
                    onClick={() => setSeletedPart(part.value)}
                    className={`${selectedPart === part.value ? 'text-[#12a483]' : ''} flex items-center justify-between rounded-md bg-white px-2.5 py-2 text-xs shadow-sm lg:text-[15px]`}
                  >
                    <div>
                      <p className='font-bold text-gray-600 uppercase'>{part.label}</p>
                      <p>
                        <span className='font-bold'>{part.question}</span> questions
                      </p>
                    </div>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </div>
                </label>
              );
            })}
          </div>
          <div className='my-4 md:flex-[2]'>
            <AnimatePresence>
              {selectedPart === 5 && (
                <motion.div
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '100%', opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                  className='mb-3 flex flex-wrap gap-3'
                >
                  {PART_5_TYPES.map((type) => {
                    return (
                      <div key={type.id} className='text-xs font-semibold lg:text-lg'>
                        <input
                          id={type.value}
                          {...register('typePart5')}
                          type='checkbox'
                          name='typePart5'
                          value={type.value}
                          className='peer sr-only'
                        />
                        <label
                          htmlFor={type.value}
                          className='rounded-full bg-white px-2 py-0.5 peer-checked:bg-[#12a483] peer-checked:text-white'
                        >
                          {type.label}
                        </label>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
            <div className='flex h-8 items-center justify-between rounded-full bg-white pl-3 text-[10px] shadow-lg md:h-10 md:text-[10px] lg:w-[90%] xl:pl-6 xl:text-sm'>
              <input
                type='text'
                {...register('topic')}
                placeholder={`Vocabulary topic`}
                className='w-[40%] outline-none'
              />
              <select {...register('duration')} className='w-[20%] font-semibold outline-none'>
                {EXAM_DURATIONS.map(({ id, label, value }) => (
                  <option value={value} key={id}>
                    {label}
                  </option>
                ))}
              </select>
              {selectedPart === 7 && (
                <select {...register('typePart7')} className='w-[20%] font-semibold outline-none'>
                  <option value='1'>1 passage</option>
                  <option value='2'>2 passages</option>
                  <option value='3'>3 passages</option>
                </select>
              )}

              <button
                type='submit'
                className='rounded-full bg-[#ff723d] p-[11.5px] font-bold text-white uppercase md:mr-2'
              >
                {isLoading ? <SyncLoader size={8} color='#fff' /> : 'start now'}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className='h-10 bg-gradient-to-b from-[#F8EBE9] to-[#F5F7FB]' />
      <AnimatePresence>
        {isLoading ||
          (data && (
            <div className='flex-row-reverse p-[2vw] md:flex md:justify-between xl:px-[6vw]'>
              <ExamControls
                data={data}
                userAnswers={userAnswers}
                setShowResult={setShowResult}
                showResult={showResult}
              />
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                className='text-gray-600 md:w-[550px] lg:w-[700px] 2xl:w-[1100px] 2xl:flex'
              >
                <div className={`${data.passages ? '2xl:flex-[2]' : ''}`}>
                  <h3 className='my-3 font-bold'>{data.title}</h3>
                  {data.passages &&
                    data.passages.map((passage, index) => (
                      <p
                        key={index}
                        className='border-b-1 border-b-gray-400 py-5 text-sm'
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {passage.content}
                      </p>
                    ))}
                </div> 
                <div className={`${data.passages ? '2xl:flex-1' : 'xl:grid-cols-2 2xl:grid-cols-3'} grid gap-4`}>
                  {data.questions.map((question, index) => (
                    <Question
                      key={question.id}
                      data={question}
                      showResult={showResult}
                      setUserAnswers={setUserAnswers}
                      userAnswers={userAnswers}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
      </AnimatePresence>
      <AnimatePresence>
        {!data && (
          <div className='xl:py-5 flex justify-center'>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            src='/ai_greet.gif'
            className='my-24 xl:my-0 xl:py-5 xl:h-72'
          />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default page;
