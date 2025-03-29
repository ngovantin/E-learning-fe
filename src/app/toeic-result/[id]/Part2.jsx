import Question from '@/components/cards/Question';

const Part2 = ({ userAnswers, correctAnswers }) => {
  const question = {
    options: { A: ' ', B: ' ', C: ' ' },
    question: ' '
  };
  return (
    <div>
      {[...Array(25)].map((_, index) => (
        <Question
          key={index}
          data={{ ...question, answer: correctAnswers[index] }}
          userAnswers={userAnswers}
          index={index + 7}
          showResult={true}
        />
      ))}
    </div>
  );
};
export default Part2;
