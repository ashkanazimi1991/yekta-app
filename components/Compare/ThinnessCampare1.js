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
            border: 0,
             borderRadius:'10%',

            color: "#333"
          }}
        />
      }
      itemOne={
        <ReactCompareSliderImage
        src="/images/thin01.jpg"
          style={{ filter: "grayscale(1)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/thin02.jpg"

          alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        height: "50vh",
        borderRadius:'10%',

        ...style
      }}
    />
  );
};







//   const handlePositionChange = useCallback(
//     (position) => console.log("[Portrait]", position),
//     []
//   );

//   return (
//     <ReactCompareSlider
//       {...props}
//       handle={
//         <ReactCompareSliderHandle
//           buttonStyle={{
//             backdropFilter: undefined,
//             background: "white",
//             border: 0,
//                         color: "#333"
//           }}
//         />
//       }
//       itemOne={
//         <ReactCompareSliderImage
//         src="/images/botax01.jpg"
//           style={{ 
//             filter: "grayscale(1)",
//             borderRadius:'20%',

//            }}
//           alt="کلینیک زیبایی"
//         />
//       }
//       itemTwo={
//         <ReactCompareSliderImage
//         src="/images/botax02.jpg"

//           alt="کلینیک یکتا"
//         />
//       }
//       onPositionChange={handlePositionChange}
//       style={{
//         display: "flex",
//         width: "100%",
//         height: "50vh",
//         borderRadius:'20%',
        
//         ...style
//       }}
//     />
//   );
// };

export const ThinnessCampare1 = () => (
  <div>


    <div className="flex justify-center  w-full item-center"  >
    
         
 
         
           <div className="  rounded-xl  p-1">
             <Beauty position={30}/>
           </div>

  

    </div>

  </div>
);
export default ThinnessCampare1