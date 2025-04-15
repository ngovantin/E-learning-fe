import Feedback from "./Feedback";

const About = () => {
  return (
    <div className='bg-[#F8EBE9]'>
      <p
        id='about'
        className='mb-7 ml-[3vw] inline-flex [rotate:-12deg] rounded-full bg-[#ff723d] px-5 py-0.5 font-bold text-[#F5F7FB] 2xl:text-4xl'
      >
        About Us
      </p>
      <div className='py-3 pr-[6vw] xl:pl-[6vw]'>
        <div className='flex items-center justify-around gap-2'>
          <img
            src='about.png'
            alt=''
            className='h-[90vw] w-[45vw] object-cover object-right lg:h-[60vw] xl:h-[45vw] xl:object-contain'
          />
          <div className='w-[50vw]'>
            <p className='mb-7 inline-flex [rotate:-12deg] rounded-full bg-[#ff723d] px-5 py-0.5 font-bold text-[#F5F7FB]'>
              Why us
            </p>
            <h1 className='text-sm font-semibold md:text-xl lg:text-3xl xl:text-4xl 2xl:mb-6 2xl:text-6xl'>
              Growth Skill With Devskill Academy & Accelerate to your Better future
            </h1>
            <div className='mt-6 text-[9px] md:text-[13px] lg:text-lg xl:text-xl 2xl:text-2xl'>
              <p className='py-4'>
                Embrace the transformative journey of learning with Devskill; knowledge becomes a catalyst for progress.
              </p>

              <p className='mt-6 pb-7 text-[9px] md:text-[13px] lg:text-lg xl:text-xl 2xl:text-2xl'>
                Our dynamic educational platform offers you the tools and resources to propel yourself towards a
                brighter future. With expert guidance & a supportive community,
              </p>
            </div>
          </div>
        </div>
      </div>
      <Feedback />
    </div>
  );
};
export default About;
