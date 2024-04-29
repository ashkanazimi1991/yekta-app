import React from 'react'
import Image from 'next/image';
import BF_laser from './Compare/BF_laser';
// import ModalT from './ModalT';
// import Link from 'next/link';
// import ToolsSlider from './ToolsSlider';




const Laser = () => {

  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full py-8 bg-[#f5e5d4] h-screen md:h-full  '>

    

      <div className='flex flex-row-reverse md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center  items-center w-1/2 md:w-full'>
          <BF_laser/>             
    
          {/* <video
          poster="laser.jpg"
              autoPlay
              loop
              
               className="rounded-2xl h-96 object-cover"
              >
              <source src="/video/laser.mp4" type="video/mp4" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              Your browser does not support the video tag.
              </video> */}
​
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl text-center w-full py-2 px-6 text-gray-600  font-bold pt-4'>بخش لیزر</p>
             
             <p className='text-xl text-center w-full py-2 px-6 text-gray-600   pt-4'>Titanium  Laser</p>

             </div>
          <img
             className="  w-20 object-cover  rounded-md h-20 "
             src="/images/yekta_logoIn.png"
             width='200'
             height='200'
             alt="کلینیک زیبایی یکتا"
            />
          </div>

            <p className='text-right text-md sm:text-sm sm:leading-loose py-4 md:text-center text-gray-600 px-6 leading-loose'>
            دستگاه لیزر تیتانیوم یکی از کارآمدترین دستگاه های لیزر جهت رفع موهای ناخواسته بدن می باشد که از سه طول موج به طور همزمان استفاده می کند. البته این طول موج ها به عمق لایه های پوست تابانده می شوند و ریشه موهای زائد را مورد هدف قرار می دهند. این دستگاه به جدیدترین فناوری ها و تکنولوژی ها مجهز بوده و جزء پرفروش ترین و پرمصرف ترین دستگاه های موجود در صنعت زیبایی محسوب میشود
            </p>


          </div>
      </div>
      

        {/* </div> */}
      {/* </div> */}


 
 


    </div>
  )
}

export default Laser