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
        src="/images/face1.jpg"
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/face2.jpg"
        style={{ filter: "grayscale(1)" }}

          alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        height: "50%",
        borderRadius:'8px',
         ...style
      }}
    />
  );
};







export const HeroCompare = () => (



   
           <div className="   ">
             <Beauty position={50}/>
           </div>

 


);
export default HeroCompare