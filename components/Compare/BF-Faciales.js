import React, { useCallback } from "react";
import Image from "next/image";

/**
 * @see https://github.com/nerdyman/react-compare-slider
 */

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from "react-compare-slider";



export const Beauty = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <ReactCompareSlider
      {...props}
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            backdropFilter: undefined,
            background: "white",
            border: 0,
            color: "#333"
          }}
        />
      }
      itemOne={
        <ReactCompareSliderImage
        src="/images/lip1.jpg"
          // style={{ filter: "grayscale(1)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/lip2.jpg"

          alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        height: "50vh",
        // ...style
      }}
    />
  );
};






export const Skin = ({ style, ...props }) => {
  const handlePositionChange = useCallback(
    (position) => console.log("[Portrait]", position),
    []
  );

  return (
    <ReactCompareSlider
      {...props}
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            backdropFilter: undefined,
            background: "white",
            border: 0,
                        color: "#333"
          }}
        />
      }
      itemOne={
        <ReactCompareSliderImage
        src="/images/botax01.jpg"
          // style={{ filter: "grayscale(1)" }}
          alt="کلینیک زیبایی"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/botax02.jpg"

          alt="کلینیک یکتا"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        height: "50vh",
        
        // ...style
      }}
    />
  );
};

export const BF_Faciales = () => (
  <div className="w-full ">
     

    <div className=" flex justify-center w-full px-[5%] py-12 item-center  ">
        <div className="grid grid-cols-2 gap-12 ">  
         
           <div className="md:col-span-2 h-64 xl:h-96  rounded-xl bg-[#3f64aa38] p-4">
           <video   controls  className=" h-full object-cover w-full"  >
                <source   src="/video/facial.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
           </div>
         
           <div className="md:col-span-2 h-64 xl:h-96  rounded-xl bg-[#3f64aa38] p-4">
           <video   controls  className=" object-cover h-full w-full "  >
                <source   src="/video/facial2.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
           </div>


           <div className="col-span-2  rounded-xl bg-[#3f64aa38] p-4">
             <Skin position={80} />
           </div>


           <div className="col-span-2  rounded-xl bg-[#3f64aa38] p-4">
           <img
             className="  w-full h-full  object-cover  rounded-xl bg-red-400 "
             src="/images/facial10.jpg"
             width='1200'
             height='800'
             alt="کلینیک یکتا"
            />
           </div>



        </div>
    </div>

  </div>
);
export default BF_Faciales