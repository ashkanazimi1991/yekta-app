import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class ToolsSlider extends Component {
  render() {
    const settings = {
      autoplay: false,
      infinite: true,
      initialSlide: 1,
      slidesToShow: 3,
      dots: true,
      slidesToScroll: 2,
      speed: 1500,
      lazyLoad: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
      ],
    };

    // Videos, titles, and descriptions
    const slides = [
      {
        video: "/videos/bg.mp4",
        // title: "Title 1",
        // description: "Description 1",
      },
      {
        video: "/videos/bg.mp4",
        // title: "Title 2",
        // description: "Description 2",
      },
      {
        video: "/videos/bg.mp4",
        // title: "Title 3",
        // description: "Description 3",
      },
      {
        video: "/videos/bg.mp4",
        // title: "Title 4",
        // description: "Description 4",
      },
      {
        video: "/videos/bg.mp4",
        // title: "Title 5",
        // description: "Description 5",
      },
    ];

    return (
      <div className="container py-20 overflow-hidden">
        <Slider {...settings} className="fs">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative p-2 rounded-xl shadow-xl  bg-[#ffffff4b] backdrop-blur-md"
            >
              <video
                className=" h-[600px] shadow-xl  object-cover rounded-xl"
                src={slide.video}
                controls
              ></video>
              {/* <div className="">
                <div className="backdrop-blur-sm w-full flex h-20 justify-center items-center flex-row-reverse z-10 rounded-b-md bg-[#18544e8a] absolute left-0 bottom-0">
                  <p className="text-blue-50 font-bold w-1/3 flex justify-center items-center h-full bg-[#00000061] cursor-pointer text-md text-center">
                    {slide.title}
                  </p>
                  <p className="text-rose-50 text-sm w-2/3 text-center">
                    {slide.description}
                  </p>
                </div>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
