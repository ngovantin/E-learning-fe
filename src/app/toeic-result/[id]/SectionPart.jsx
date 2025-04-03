import Question from '@/components/cards/Question';

const SectionPart = ({ sections, userAnswers, correctAnswers }) => {
  return (
    <div>
      {sections?.map((section) => (
        <div key={section._id}>
          {section.graphic && (
            <div>
              <img src={section.graphic} />
            </div>
          )}
          <div>
            {section.questions.map((raw) => {
              const question = {
                options: { A: raw.a, B: raw.b, C: raw.c, D: raw.c },
                question: raw.question,
                answer: correctAnswers[raw.index]
              };
              return (
                <Question key={raw._id} data={question} userAnswers={userAnswers} index={raw.index} showResult={true} />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SectionPart;
