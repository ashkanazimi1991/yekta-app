import React, { useCallback } from "react";

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
        src="/images/thin02.jpg"
          // style={{ filter: "grayscale(1)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/thin01.jpg"

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
          style={{ filter: "grayscale(1)" }}
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
        height: "25vh",
        
        ...style
      }}
    />
  );
};

export const ThinnessCampare = () => (
  <div>


    <div className='flex py-6 px-[5%] justify-center w-full item-center' >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
         
 
        <div className="col-span-2 flex justify-center items-center  rounded-xl bg-[#3f64aa38] p-4">

       <p className="text-gray-200 text-sm leading-loose text-right">دستگاه کرایولیپولیز۲۰۲۳
این دستگاه یک فن ‏آوری نوین است. به کمک سرما، به آرامی و به طور مؤثر سلول‌های چربی زیر پوست را هدف قرار می دهد. آن‌ها را کریستالیزه یا منجمد می‌کند. سپس با گذشت زمان، بدن به طور طبیعی چربی‌ها و این سلول‌های مرده را دفع می کند و مجدداً ترمیم می‌کند</p>
          </div>
  
          <div className="md:col-span-2 h-96   rounded-xl bg-[#3f64aa38] p-4">

            <video   controls  className=" rounded-lg h-full w-full  object-cover "  >
            <source   src="/video/thin.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
            </div>

           {/* <div className="md:col-span-2 h-96 rounded-xl bg-[#3f64aa38] p-4">

             <Beauty position={50} className='h-96'/>
           </div> */}

           <div className="md:col-span-2 h-96  rounded-xl bg-[#3f64aa38] p-4">

           <video   controls  className=" rounded-lg h-full  w-full  object-cover "  >
            <source   src="/video/thin2.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
           </div>

       

       

        </div>
    </div>

  </div>
);
export default ThinnessCampare