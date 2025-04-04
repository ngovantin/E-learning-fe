import * as motion from 'motion/react-client';
const WelcomeVideo = ({ setShowVideo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowVideo(false)}
      className={`fixed top-0 right-0 left-0 z-30 flex h-[100vh] items-center justify-center bg-[#00000044] backdrop-blur-[2.5px]`}
    >
      <motion.iframe
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className='md:h-[500px] md:w-[650px] flex flex-col rounded-3xl py-15'
        key='box'
        onClick={(e) => e.stopPropagation()}
        src='https://www.youtube.com/embed/xdOqNyYdQVU?si=OLOupz6sqVFlN4Ev'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></motion.iframe>
    </motion.div>
  );
};
export default WelcomeVideo;
