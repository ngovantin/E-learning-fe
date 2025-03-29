import Question from '@/components/cards/Question';

const Part5 = ({ questions, userAnswers, correctAnswers }) => {
    console.log(userAnswers);
  return (
    <div>
      {questions?.map((raw) => {
        const question = {
          options: { A: raw.a, B: raw.b, C: raw.c, D: raw.c },
          question: raw.question,
          answer: correctAnswers[raw.index]
        };
        return (
          <Question
            key={raw._id}
            data={question}
            userAnswers={userAnswers}
            index={raw.index}
            showResult={true}
          />
        );
      })}
    </div>
  );
};
export default Part5;
