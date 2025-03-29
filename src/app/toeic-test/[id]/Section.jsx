import Question from '@/components/cards/Question';
import { useContext } from 'react';
import { PartContext } from './TestProvider';

const Section = ({ data }) => {
  const { userAnswers, setUserAnswers } = useContext(PartContext);
  return (
    <div>
      {data.graphic && (
        <div>
          <img src={data.graphic} />
        </div>
      )}
      <div>
        {data.questions.map((raw) => {
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
    </div>
  );
};
export default Section;
