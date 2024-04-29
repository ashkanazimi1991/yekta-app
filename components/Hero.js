import React from 'react';
import Image from 'next/image';
// import FiledSlider from './Compare/FiledSlider';
import HeroCompare from './Compare/HeroCompare';
import BF_Botax from './Compare/BF_Botax';
import BF_filer from './Compare/BF_filer';
import BF_facial from './Compare/BF_facial';
import BF_tato from './Compare/BF_tato';

const Hero = () => {
  return (
    <div className=' px-[10%] md:px-[5%] flex justify-center  items-center w-full  min-h-screen'>
     <Image
             className=" fixed -z-20 top-0 w-[100%] md:w-screen object-cover h-full "
             src="/images/bg-100.jpg"
             width='1200'
             height='800'
             alt="کلینیک یکتا"
            />

<div className='grid grid-cols-4  max-w-4xl  gap-4'>
  <div className='col-span-4  p-3 backdrop-blur-md rounded-xl shadow-2xl animate-jump-in animate-duration-1000 animate-ease-in-out '>
    <HeroCompare/>
  </div>
 
  <div className=' col-span-1 md:col-span-2 '>
  <BF_Botax/>
  </div>

  <div className=' col-span-1 md:col-span-2 '>
  <BF_filer/>
  </div>

  <div className=' col-span-1 md:col-span-2 '>
    <BF_facial/>
  </div>


  <div className=' col-span-1 md:col-span-2 '>
    <BF_tato/>
  </div>

</div>

     {/* <div className='w-full flex md:flex-col justify-center items-center   min-h-screen'>
     <div className='flex w-1/2 md:w-full h-full p-4 shadow-2xl bg-black'>
      <HeroCompare/>
     </div>
    
    
     <div className='  w-full'>
     
      </div>
     </div> */}
    </div>
    
  )
}

export default Hero