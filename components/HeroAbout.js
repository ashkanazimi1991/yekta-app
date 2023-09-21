import React from 'react';
import Image from 'next/image';
import ClinicSlider from './ClinicSlider';

const HeroAbout = () => {
  return (
    <div className='py-12 space-y-8 flex flex-col w-full justify-center items-center '>
        
        
        <div className='flex justify-center items-center'>
         <Image
         className=" object-contain w-16"
         src="/images/yekta_logo.png"
         width='100'
         height='100'
         alt="کلینیک یکتا"
         />
         
       

         <div>
          <p className='text-xl font-bold text-[#E08798]'>YEKTA CLINIC</p>
          <p className='text-md text-gray-200'> Always Perfect</p>
        </div>

        </div>
        
     
     
     <div className='flex flex-col-reverse justify-center items-center w-full'>

        <ClinicSlider   
            img1='/images/office02.jpg' img2='/images/yekta-bg.jpg' 
            // img3='/images/office02.jpg' img4='/images/yekta-bg.jpg'
            //  img5='/images/office02.jpg' img6='/images/yekta-bg.jpg'
          // title1='Startup Ideas' title2='Large-scale Shops' title3='Healthcare and Lifestyle'
          //  title4='Blockchain and Crypto' title5='Service Base Platforms' title6='Robotic and IoT' 
          />
<div className='flex justify-items-center items-center flex-col'>
        <p className='text-xl text-center py-2   md:text-xl text-gray-100 '>  کلینیک پوست, مو و زیبایی یکتا </p>
        <p className='text-center px-[10%] text-gray-200 text-md md:text-sm  leading-loose  '>کلینیک یکتا با کادری مجرب در محیطی پاکیزه و آرامش بخش با تجهیزات مدرن آماده ارائه خدمات زیبای به مراجعه کنندگان عزیز  می باشد</p>
</div>

     </div>


    </div>
  )
}

export default HeroAbout