import ExamControls from '@/components/cards/ExamControls';
import Question from '@/components/cards/Question';
import { AnimatePresence, motion } from 'framer-motion';
const TestContent = ({data, userAnswers, setUserAnswers, showResult, isLoading, setShowResult}) => {
  return (
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
            className='text-gray-600 md:w-[550px] lg:w-full 2xl:flex'
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
                  index={index + 1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      ))}
  </AnimatePresence>
  )
}
export default TestContent