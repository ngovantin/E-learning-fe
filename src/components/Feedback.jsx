"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const feedbacks = [
  {
    id: 1,
    name: "David Johnson",
    content:
      "Tinn.edu.vn is an excellent online learning platform. I used it to prepare for my exams, and the results were impressive. The interface is user-friendly and easy to navigate.",
    date: "2025-02-20",
    picture:
      "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
  },
  {
    id: 2,
    name: "Emily Carter",
    content:
      "The courses on tinn.edu.vn are of high quality and completely free. I am particularly impressed with the online exam preparation section, which helped me gain confidence before my test.",
    date: "2025-02-22",
    picture:
      "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    content:
      "I took a programming course on tinn.edu.vn, and the content was detailed and easy to understand. This platform is a valuable resource for students.",
    date: "2025-02-25",
    picture:
      "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
  },
  {
    id: 4,
    name: "Sophia Williams",
    content:
      "The platform provides a lot of useful materials and high-quality lectures. I have recommended tinn.edu.vn to many of my friends.",
    date: "2025-02-27",
    picture:
      "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
  },
  {
    id: 5,
    name: "James Anderson",
    content:
      "Although it's a free platform, the service quality of tinn.edu.vn is comparable to paid websites. I'm very satisfied and will continue using it.",
    date: "2025-02-28",
    picture:
      "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
  },
];

const Feedback = () => {
  return (
    <div>
      <h1 className="xl:text-6xl lg:text-4xl text-2xl font-bold text-center px-[13vw] py-10">
        See why We're rated #1 in Online Platform tech
      </h1>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="md:h-[40vw] h-[50vw] w-[80vw] rounded-4xl border border-gray-300 m"
      >
        {feedbacks.map((feedback) => {
          return (
            <SwiperSlide
              key={feedback.id}
              className="bg-white rounded-4xl shadow-2xl relative py-[4vw] px-[14vw]"
            >
              <img src="world_map.png" alt="" className="max-h-full" />
              <div className="flex flex-col text-center items-center bg-[#FFFFFFB3] py-[6vw] px-[7vw] absolute top-0 bottom-0 left-0 right-0">
                <img src="logo.png" alt="" className="xl:w-30 lg:w-24 md:w-20 w-[6vw]" />
                <p className="xl:text-2xl lg:text-[16px] md:text-[13px] my-[3vw] font-medium text-[11px]">{feedback.content}</p>
                <img
                  src={feedback.picture}
                  alt=""
                  className="h-[6vw] w-[6vw] object-cover rounded-full"
                />
                <div className="xl:text-xl lg:text-sm md:text-[10px] flex gap-[1vw] text-[8px] mt-[0.7vw]">
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
  );
};
export default Feedback;
