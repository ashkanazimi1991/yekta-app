import React, { useState } from 'react'
import Image from 'next/image';

import ModalT from './ModalT';
// import Link from 'next/link';
import ToolsSlider from './ToolsSlider';



const Fecial = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full py-8 bg-[#000000c2]   '>

    

      <div className='flex flex-row-reverse md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center  items-center w-1/2 md:w-full'>
        <video
          poster="laser.jpg"
              autoPlay
              loop
              
               className="rounded-2xl h-96 object-cover"
              >
              <source src="/video/facial.mp4" type="video/mp4" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              Your browser does not support the video tag.
              </video>
​        
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl text-right w-full py-2 px-6 text-gray-200  font-bold pt-4'>بخش فشیال</p>
             
               <button  className="text-sm text-right w-full py-2 px-6  animate-pulse  text-purple-500"   onClick={openModal}>
              امکانات و مواد 
         {/* <AiOutlineFolderOpen className='text-green-400  text-xl text-cernter mx-4 cursor-pointer'/> */}
              </button>
              <ModalT isOpen={isModalOpen} onClose={closeModal} >
                <div className='flex flex-col justify-center  my-10 items-center'>
                  <div className='w-full'>
                  <ToolsSlider   
                      img1='/images/tools10.jpg' img2='/images/tools10.jpg' 
                      //  img3='/images/tools3.jpg' img4='/images/tools4.jpg'
                      //  img5='/images/office02.jpg' img6='/images/yekta-bg.jpg'
                    title1=' ------  ' title2='----- ' 
                    des1='1دستگاه نمونه  '
                    des2='2دستگاه نمونه '

                  //   title3='Healthcare and Lifestyle'
                    //  title4='Blockchain and Crypto' title5='Service Base Platforms' title6='Robotic and IoT' 
                    />
 
                 </div>
                </div>
                      <p className='text-right text-sm py-4 px-8 leading-loose'>
                     پیدا شدن خطوط ریزودرشت و یا به اصلاح چین‌وچروک در صورت و سیاهی دور چشم و افتادگی ابروها برروی چشم نشانه افزایش سن و القای حس پیری در آدمی می‌باشد. و انسانی که ذاتاً طالب زیبایی است از زمانهای دور در فکر چاره‌ای برای حل این مشکل بوده است
                     </p>
              </ModalT>
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

export default Fecial