import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";

import VideoInput from "./VideoInput";
function TeamSlider() {
  const [tournoment, setTournoment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios
      .get("https://api.ebsalar.com/api/v1/front/tournament/")
      .then((res) => {
        setTournoment(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const sliderData = [
    {
      id: 1,
      title: "title",
    },
    {
      id: 2,
      title: "title2",
    },
    {
      id: 3,
      title: "title",
    },
    {
      id: 4,
      title: "title2",
    },
    {
      id: 5,
      title: "title",
    },
    {
      id: 6,
      title: "title2",
    },
  ];


  return (
    <div className="slider-container px-4   py-8  w-full">
      <Swiper
        // effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        navigation={true}
        // coverflowEffect={{
        //   rotate: 20,
        //   stretch: 0,
        //   depth: 50,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        // }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {tournoment.map(
          (item) => {

            // Use the helper function to get text from JSON
            // const descriptionText = getTextFromJson(slider.description)
            // (
            return (
              <SwiperSlide
                key={item.id}
                className=" w-full py-1 h-full min-h-full"
              >
                <div className=" relative  w-full    flex  justify-center items-center flex-col  rounded-2xl   h-full">
                  <div className="border border-gray-700 text-center  h-full  relative overflow-hidden w-96 sm:w-72 backdrop-blur-xl bg-[#c357a442]    rounded-2xl  flex space-y-4 justify-center items-center flex-col">
                    {item.file && item.file.match(/\.(mp4|webm)$/) ? (
                      <VideoInput file={item.file} />
                    ) : item.file &&
                      item.file.match(/\.(jpeg|jpg|png|gif)$/) ? (
                      <img
                        src={item.file}
                        alt={item.title}
                        className="w-full h-full   object-contain "
                      />
                    ) : null}
                    <div className="h-44 overflow-y-scrol backdrop-blur-md  bg-[#00000018] absolute bottom-0 left-0 w-full scrollbar-hide ">
                      <p className="w-full text-lg  text-gray-100  py-4">
                        {item.title}
                      </p>
                      <p className=" w-full h-full px-4 pb-4 leading-6 text-center  text-sm text-gray-200 ">
                        {item.description}
                      </p>
                    </div>

                    {/* -------------------------button gradient */}
                    {/* <div className="px-2 py-3">
        <button className=" h-full px-7 py-4 bg-gradient-to-r from-[#7b2a6f71] to-[#8a0327]  backdrop-blur-xl
         rounded-2xl  flex items-center divide-x divide-gray-600">

          <p className="pl-2 text-gray-300"> ثبت نام </p>
        </button>
        </div> */}
                  </div>

                  {/* button gradient */}
                </div>
              </SwiperSlide>
            );
          }
          // )
        )}
      </Swiper>
    </div>
  );
}

export default TeamSlider;
