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
            background: "",
            border: 1,
                        color: "#7e22ce"
          }}
        />
      }
      itemOne={
        <ReactCompareSliderImage
        src="/images/lip1.jpg"
          // style={{ filter: "grayscale(1)" }}
          alt="کلینیک یکتا"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/lip2.jpg"

          alt="کلینیک زیبایی"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        height: "50",
        // ...style
      }}
    />
  );
};






export const BF_Botax = () => (
  <div>


    <div className="flex justify-center    w-full items-center" >
       
         
       
         
           <div className=" flex justify-center rounded-full bg-green-400 items-center    ">
             <Beauty position={20}/>
           </div>



    </div>




    {/* <Portrait />
    <CustomHandle position={50} /> */}
  </div>
);
export default BF_Botax