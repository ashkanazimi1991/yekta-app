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
          // style={{ filter: "grayscale(1)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/face2.jpg"

          alt="two"
        />
      }
      onPositionChange={handlePositionChange}
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        // ...style
      }}
    />
  );
};






// export const Dental = ({ style, ...props }) => {
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
//             color: "#333"
//           }}
//         />
//       }
//       itemOne={
//         <ReactCompareSliderImage
//         src="/images/teethA.jpg"
//           // style={{ filter: "grayscale(1)" }}
//           alt="one"
//         />
//       }
//       itemTwo={
//         <ReactCompareSliderImage
//         src="/images/teethB.jpg"

//           alt="two"
//         />
//       }
//       onPositionChange={handlePositionChange}
//       style={{
//         display: "flex",
//         width: "100%",
//         height: "50vh",
//         // ...style
//       }}
//     />
//   );
// };


/** With Customised `handle`. */
// export const CustomHandle = ({ style, ...props }) => {
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
//             color: "#333"
//           }}
//         />
//       }
//       itemOne={
//         <ReactCompareSliderImage
//         src="/images/brainxray10.jpg"
//           // style={{ filter: "grayscale(1)" }}
//           alt="one"
//         />
//       }
//       itemTwo={
//         <ReactCompareSliderImage
//         src="/images/brainxray11.jpg"

//           alt="two"
//         />
//       }
//       onPositionChange={handlePositionChange}
//       style={{
//         display: "flex",
//         width: "100%",
//         height: "50vh",
//         // ...style
//       }}
//     />
//   );
// };



// export const Skin = ({ style, ...props }) => {
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
//             background: "",
//             border: 1,
//                         color: "#000"
//           }}
//         />
//       }
//       itemOne={
//         <ReactCompareSliderImage
//         src="/images/skin.jpg"
//           // style={{ filter: "grayscale(1)" }}
//           alt="one"
//         />
//       }
//       itemTwo={
//         <ReactCompareSliderImage
//         src="/images/skin2.jpg"

//           alt="two"
//         />
//       }
//       onPositionChange={handlePositionChange}
//       style={{
//         display: "flex",
//         width: "100%",
//         height: "50vh",
        
//         // ...style
//       }}
//     />
//   );
// };

export const HeroCompare = () => (
  <div>


    <div className="flex justify-center min-h-screen   w-full items-center" >
        <div className=" ">
         
           {/* <div className="bg-[#2f94b338] rounded-xl bg-gradient-to-b  p-1">
             <Skin position={50} />
           </div> */}
         
           <div className="bg-[#2f94b338]   ">
             <Beauty position={50}/>
           </div>


        </div>
    </div>




    {/* <Portrait />
    <CustomHandle position={50} /> */}
  </div>
);
export default HeroCompare