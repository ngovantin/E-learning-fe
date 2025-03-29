import Question from '@/components/cards/Question';
import { useContext } from 'react';
import { PartContext } from './TestProvider';

const Part5 = ({ questions }) => {
    const { userAnswers, setUserAnswers } = useContext(PartContext);
    console.log(userAnswers);
  return (
    <div>
      {questions?.map((raw) => {
        const question = {
          options: { A: raw.a, B: raw.b, C: raw.c, D: raw.c },
          question: raw.question
        };
        return (
          <Question
            key={raw._id}
            data={question}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            index={raw.index}
          />
        );
      })}
    </div>
  );
};
export default Part5;
