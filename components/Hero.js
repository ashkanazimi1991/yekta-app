import React from 'react';
import FiledSlider from './Compare/FiledSlider';
import HeroCompare from './Compare/HeroCompare';

const Hero = () => {
  return (
    <div className=''>




     <div className='w-full  bg-[#E1D9D6] min-h-screen'>
      <HeroCompare/>
      <div className=' absolute bottom-0 left-0 w-full'>

        <FiledSlider/>
      </div>
     </div>
    </div>
    
  )
}

export default Hero