import { useRouter } from "next/navigation";

const TestResultCard = ({data}) => {
  const router = useRouter();
  const {correctSum, createdAt, score, test, timeSpent, _id} = data ?? {};
  return (
    <div className='rounded-lg bg-white shadow-sm'>
      <img className='rounded-t-lg' src={test.image} alt='' />
      <div className='p-3 text-[10px]'>
        <p className='text-sm font-semibold'>{`Practice Set TOEIC ${test.name} ${test.publishYear}`}</p>
        <p className='my-2 inline-block rounded-lg bg-[#12a483] p-1 font-semibold text-white'>Full Test</p>
        <p>Completed Time: {`${String(Math.floor(data?.timeSpent / 60)).padStart(2, "0")}:${String(data?.timeSpent % 60).padStart(2, "0")}`}</p>
        <p>Result: {correctSum}/200</p>
        <p>Score: {score}</p>
        <p>Test Date: {createdAt.split('T')[0]}</p>
      </div>
      <button onClick={()=>router.push(`/toeic-result/${_id}`)} className='mx-[10%] mb-5 w-[80%] rounded-full bg-amber-300 p-1 text-xs font-semibold'>VIEW DETAIL</button>
    </div>
  );
};
export default TestResultCard;
