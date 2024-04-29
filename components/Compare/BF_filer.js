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
            borderRadius:'20%',

                        color: "#333"
          }}
        />
      }
      itemOne={
        <ReactCompareSliderImage
        src="/images/lip2.jpg"
          style={{ 
            filter: "grayscale(1)",
   
          }}
          alt="کلینیک یکتا"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/lip1.jpg"

          alt="کلینیک زیبایی"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        height: "50",
        borderRadius:'10%',
        
        ...style
      }}
    />
  );
};






export const BF_filer = () => (
  <div>


    <div className="flex justify-center    w-full items-center" >
       
         
       
         
           <div className=" flex justify-center rounded-full items-center    ">
             <Beauty position={20}/>
           </div>



    </div>




    {/* <Portrait />
    <CustomHandle position={50} /> */}
  </div>
);
export default BF_filer