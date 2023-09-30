import React from 'react'
import Image from 'next/image';
// import BF_laser from './Compare/BF_laser';
// import ModalT from './ModalT';
// import Link from 'next/link';
// import ToolsSlider from './ToolsSlider';




const Laser = () => {

  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full py-8 bg-[#000000c2]   '>

    

      <div className='flex flex-row-reverse md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center  items-center w-1/2 md:w-full'>
          {/* <BF_laser/>              */}
    
          <video
          poster="laser.jpg"
              autoPlay
              loop
              
               className="rounded-2xl h-96 object-cover"
              >
              <source src="/video/laser.mp4" type="video/mp4" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              Your browser does not support the video tag.
              </video>
​
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl text-right w-full py-2 px-6 text-gray-200  font-bold pt-4'>بخش لیزر</p>
             

             </div>
          <Image
             className="  w-20 object-cover  rounded-md h-20 "
             src="/images/yekta_logoIn.png"
             width='1200'
             height='800'
             alt="CEO"
            />
          </div>

            <p className='text-right text-md sm:text-xs sm:leading-loose py-4 md:text-center text-gray-300 px-6 leading-loose'>
            پیدا شدن خطوط ریزودرشت و یا به اصلاح چین‌وچروک در صورت و سیاهی دور چشم و افتادگی ابروها برروی چشم نشانه افزایش سن و القای حس پیری در آدمی می‌باشد. و انسانی که ذاتاً طالب زیبایی است از زمانهای دور در فکر چاره‌ای برای حل این مشکل بوده است            </p>
        </div>
      </div>
      

        {/* </div> */}
      {/* </div> */}


 
 


    </div>
  )
}

export default Laser