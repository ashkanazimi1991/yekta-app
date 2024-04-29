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
        src="/images/botox13.jpg"
          style={{ 
            filter: "grayscale(1)",
   
          }}
          alt="کلینیک زیبایی یکتا"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/botox14.jpg"

          alt="کلینیک زیبایی یکتا"
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






export const BF_Botax = () => (
  <div>

     <div className=" flex justify-center rounded-md    ">
        <Beauty position={20}/>
    </div>

  </div>
);
export default BF_Botax