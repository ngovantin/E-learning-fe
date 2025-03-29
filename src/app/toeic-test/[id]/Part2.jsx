import { useContext } from 'react';
import { PartContext } from './TestProvider';
import Question from '@/components/cards/Question';

const Part2 = () => {
  const { userAnswers, setUserAnswers } = useContext(PartContext);
  const question = {
    options: { A: ' ', B: ' ', C: ' '},
    question: ' '
  };
  return (
    <div>
      {[...Array(25)].map((_, index) => (
        <Question key={index} data={question} index={index + 7} userAnswers={userAnswers} setUserAnswers={setUserAnswers} />
      ))}
    </div>
  );
};
export default Part2;
