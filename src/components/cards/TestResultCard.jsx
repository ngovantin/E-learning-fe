const TestResultCard = ({data}) => {
  const {correctSum, createdAt, score, test, timeSpent} = data ?? {};
  return (
    <div className='rounded-lg bg-white'>
      <img className='rounded-t-lg' src={test.image} alt='' />
      <div className='p-3 text-[10px]'>
        <p className='text-sm font-semibold'>{`Practice Set TOEIC ${test.name} ${test.publishYear}`}</p>
        <p className='my-2 inline-block rounded-lg bg-[#12a483] p-1 font-semibold text-white'>Full Test</p>
        <p>Completed Time: {`${Math.floor(timeSpent/60)}:${timeSpent%60}`}</p>
        <p>Result: {correctSum}/200</p>
        <p>Score: {score}</p>
        <p>Test Date: {createdAt.split('T')[0]}</p>
      </div>
      <button className='mx-[10%] mb-5 w-[80%] rounded-full bg-amber-300 p-1 text-xs font-semibold'>VIEW DETAIL</button>
    </div>
  );
};
export default TestResultCard;
