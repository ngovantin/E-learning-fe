import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const page = () => {
  return (
    <div className='flex h-[100vh] flex-col items-center justify-center gap-y-5'>
      <img src='/developing.png' className='w-[40vw]' />
      <div className='flex gap-3 items-center'>
        <h3 className="text-gray-500">OOPs, this page is under development</h3>
        <Link href={'/'} className="bg-[#12a483] px-5 py-3 text-white font-semibold rounded-full">Return to hompage <FontAwesomeIcon icon={faArrowRight}/></Link>
      </div>
    </div>
  );
};
export default page;
