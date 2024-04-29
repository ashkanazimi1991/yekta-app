"use client";
import React, {  useState } from "react";

import { FaRegPlayCircle } from "react-icons/fa";
// My components import start

import dynamic from "next/dynamic";
const VideoComponent = dynamic(() => import("./VideoComponent"));
const Modal = dynamic(() => import("./Modal"));
// My components import end


const data=[
  {
    id:1,
    VideoImage:"/Images/10009.jpg",
    videoTitle:"video test",
    videoSrc:'/videos/bg.mp4'
  },{
    id:2,
    VideoImage:"/Images/100017.jpg",
    videoTitle:"video test",
    videoSrc:'/videos/bg.mp4'
  },{
    id:3,
    VideoImage:"/Images/100012.jpg",
    videoTitle:"video test",
    videoSrc:'/videos/bg.mp4'
  },{
    id:4,
    VideoImage:"/Images/100014.jpg",
    videoTitle:"video test",
    videoSrc:'/videos/bg.mp4'
  },{
    id:5,
    VideoImage:"/Images/100016.jpg",
    videoTitle:"video test",
    videoSrc:'/videos/bg.mp4'
  },{
    id:6,
    VideoImage:"/Images/100015.jpg",
    videoTitle:"video test",
    videoSrc:'/videos/bg.mp4'
  },
]
function Gallery() {

  const [showModal, setShowModal] = useState(false);
  const[modalTitle,setModalTitle]=useState("")
  const[modalSrc,setModalSrc]=useState("")
  console.log(showModal);

  return (
    <div className=" w-[80%] m-auto h-full  p-10 md:p-2">
      <p className=" text-xl md:text-md pt-4 text-purple-900  text-center ">
  چرا یکتا را انتخاب می کنند
      </p>

      <div className=" grid grid-cols-3 md:grid-cols-2 w-full gap-4  mt-5 ">
        {data.map((item) => (
          <div
          key={item.id}
            className=" max-w-full h-full flex relative cursor-pointer flex-col  "
            onClick={() => {
              setShowModal(true)
              setModalTitle(item.videoTitle)
              setModalSrc(item.videoSrc)
            }}
          >
            <img
              src="/Images/VideoLogo.svg"
              alt=""
              className=" w-full  absolute top-4 left-2 "
            />
            <img
              src={item.VideoImage}
              alt=""
              className=" w-full h-full object-cover flex rounded-xl "
            />
            <div className=" flex items-center absolute top-5 left-5  gap-3 ">
              <FaRegPlayCircle className=" text-4xl text-pink-50 " />
              {/* <p className=" text-[20px] font-[600] ">watch the video</p> */}
            </div>
          </div>
        ))}
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div>
          <VideoComponent videoTitle={modalTitle} videoSrc={modalSrc} />
        </div>
      </Modal>
    </div>
  );
}

export default Gallery;
