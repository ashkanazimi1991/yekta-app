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
        src="/images/bf01.jpg"
          // style={{ filter: "grayscale(1)" }}
          alt="one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
        src="/images/bf02.jpg"

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
//             background: "white",
//             border: 0,
//                         color: "#333"
//           }}
//         />
//       }
//       itemOne={
//         <ReactCompareSliderImage
//         src="/images/botax01.jpg"
//           style={{ filter: "grayscale(1)" }}
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
//         height: "25vh",
        
//         ...style
//       }}
//     />
//   );
// };

export const LiftingCompare = () => (
  <div>


    <div className='flex py-6 px-[5%] justify-center w-full item-center' >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
         
 
        <div className="md:col-span-2 flex justify-center items-center  rounded-xl bg-[#3f64aa38] p-4">

       <p className="text-gray-200 text-sm leading-loose text-right">
       با استفاده از هایفو چهار بعدی می توان به طور مستقیم به لایه  اسمس  رسید و لایه اسمس  را ارتقا بخشید. دستگاه هایفو چهار بعدی به طور جامع مشکلات افتادگی پوست و عدم کلاژن سازی را حل می کند. این دستگاه هایفو روی لایه کلاژن 3 میلی متری زیر پوست عمل می کند تا کلاژن را تازه کند و به ضد پیری مانند خاصیت ارتجاعی پوست، سفید شدن، رفع چین و چروک برسد.
       </p>
          </div>
  
          <div className="md:col-span-2 flex justify-center items-center  rounded-xl bg-[#3f64aa38] p-4">

            <video   controls  className=" rounded-lg  object-cover "  >
            <source   src="/video/bg.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
            </div>

           <div className="md:col-span-2  rounded-xl bg-[#3f64aa38] p-4">

             <Beauty position={50}/>
           </div>

           <div className="md:col-span-2  rounded-xl bg-[#3f64aa38] p-4">

             <Beauty position={50}/>
           </div>

       

       

        </div>
    </div>

  </div>
);
export default LiftingCompare