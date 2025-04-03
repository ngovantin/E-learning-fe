'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const feedbacks = [
  {
    id: 1,
    name: 'David Johnson',
    content:
      'Tinn.edu.vn is an excellent online learning platform. I used it to prepare for my exams, and the results were impressive. The interface is user-friendly and easy to navigate.',
    date: '2025-02-20',
    picture:
      'https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg'
  },
  {
    id: 2,
    name: 'Emily Carter',
    content:
      'The courses on tinn.edu.vn are of high quality and completely free. I am particularly impressed with the online exam preparation section, which helped me gain confidence before my test.',
    date: '2025-02-22',
    picture:
      'https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg'
  },
  {
    id: 3,
    name: 'Michael Smith',
    content:
      'I took a programming course on tinn.edu.vn, and the content was detailed and easy to understand. This platform is a valuable resource for students.',
    date: '2025-02-25',
    picture:
      'https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg'
  },
  {
    id: 4,
    name: 'Sophia Williams',
    content:
      'The platform provides a lot of useful materials and high-quality lectures. I have recommended tinn.edu.vn to many of my friends.',
    date: '2025-02-27',
    picture:
      'https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg'
  },
  {
    id: 5,
    name: 'James Anderson',
    content:
      "Although it's a free platform, the service quality of tinn.edu.vn is comparable to paid websites. I'm very satisfied and will continue using it.",
    date: '2025-02-28',
    picture:
      'https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg'
  }
];

const Feedback = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="px-[13vw] py-10 text-center text-2xl font-bold lg:text-4xl xl:text-6xl">
        See why We're rated #1 in Online Platform tech
      </h1>
      <div className="w-[70vw] flex justify-center">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[55vw] rounded-4xl h-[35vh] xl:h-[80vh] 2xl:h-[55vh]"
        >
          {feedbacks.map((feedback) => {
            return (
              <SwiperSlide
                key={feedback.id}
                className="relative rounded-4xl bg-white px-[14vw] py-[4vw] shadow-2xl"
              >
                <img src="world_map.png" className="max-h-full mx-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FFFFFFB3] px-[7vw] py-[6vw] text-center">
                  <img
                    src="/logo.png"
                    className="w-14 md:w-20 lg:w-24 xl:w-30 mb-5"
                  />
                  <p className="my-[3vw] text-[11px] font-medium md:text-[13px] lg:text-[16px] xl:text-xl">
                    {feedback.content}
                  </p>
                  <img
                    src={feedback.picture}
                    className="h-[6vw] w-[6vw] rounded-full object-cover"
                  />
                  <div className="mt-[0.7vw] flex gap-[1vw] text-[8px] md:text-[10px] lg:text-sm xl:text-xl">
                    <p className="font-bold">{feedback.name}</p>
                    <p>|</p>
                    <p className="font-light">{feedback.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
