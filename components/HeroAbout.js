import React from 'react';
// import Image from 'next/image';
import ClinicSlider from './ClinicSlider';
import SliderProduct from './SliderProduct';
import ToolsSlider from './ToolsSlider';
const HeroAbout = () => {
  return (
    <div className=' min-h-screen space-y-12 bg-[#f0f0f0] pb-6 flex flex-col w-full justify-center items-center '>
        
        <div className='flex flex-row-reverse w-full  h-screen'>

<div className='w-1/2 absolute right-0 z-10 h-screen  py-10 backdrop-blur-md  bg-[#18544e8a] flex px-[10%] justify-center items-center flex-col'>
{/* <div className='f'> */}
<div className='flex justify-center items-center'>
         <img
         className=" object-contain w-44"
         src="/images/goldlogo.png"
         width='700'
         height='700'
         alt="کلینیک یکتا"
         />
         
        </div>

        {/* <p className='text-xl text-center py-2   md:text-md text-purple-50 '>   هلدینگ و کلینیک زیبایی یکتا </p> */}
        {/* <p className='text-center px-[10%] text-purple-50  text-md md:text-xs  leading-loose md:leading-loose  '>با کادری مجرب در محیطی پاکیزه و آرامش بخش با تجهیزات مدرن آماده ارائه خدمات زیبای به مراجعه کنندگان عزیز  می باشد</p> */}
{/* </div> */}
  </div>


  <div className='w-full bg-[#f9f6ef32] min-h-screen  backdrop-blur-md'>
        <ClinicSlider   
            img1='/images/office02.jpg' img2='/images/10004.jpg' 
            // img3='/images/filler.jpg' img4='/images/office02.jpg'
            //  img5='/images/10003.jpg' img6='/images/10002.jpeg'
            // title1='محصول تست ' title2='محصول تست ۲' title3='محصول تست ۳'
            //  title4='محصول تست ۴' title5='محصول تست ۵' title6='محصول تست  ۶' 
            />

</div>
        </div>


        <ToolsSlider   
                          img1='/images/t1005.jpg' img2='/images/t1001.jpg' 
                           img3='/images/thindevice.webp' img4='/images/t1004.jpg'
                  
                           img5='/images/t1003.jpg'
                        title1=' ثبت سفارش  ' title2='----- ' 
                        des1='دستگاه هایفو چهار بعدی جوانسازی و لیفتینگ پوست '
                        des2='2دستگاه نمونه '
                        />


        
     

     <p className=' w-full py-4  text-center'>سایر محصولات و نمایندگی ها</p>
            <SliderProduct/>


    </div>
  )
}

export default HeroAbout