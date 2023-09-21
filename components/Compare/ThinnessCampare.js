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

export const ThinnessCampare = () => (
  <div>


    <div flex justify-center w-full item-center >
        <div className="grid grid-cols-2 gap-2 md:grid-cols-2">
         
 
         
           <div className="md:col-span-2 bg-[#2f94b338] rounded-xl bg-gradient-to-b  p-1">
             <Beauty position={50}/>
           </div>

           <div className="md:col-span-2 bg-[#2f94b338] rounded-xl bg-gradient-to-b  p-1">
             <Beauty position={50}/>
           </div>

        </div>
    </div>

  </div>
);
export default ThinnessCampare