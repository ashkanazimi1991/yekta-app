import React from 'react'
import Image from 'next/image';
import BF_Botax from './Compare/BF_Botax';

// import Link from 'next/link';




const Thinness = () => {


  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full py-8 bg-[#000000c2]   '>

    

      <div className='flex flex-row-reverse md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center  items-center w-1/2 md:w-full'>
          <BF_Botax/>             
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl text-right w-full py-2 px-6 text-gray-200  font-bold pt-4'>بخش بوتاکس</p>
         
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

export default Thinness