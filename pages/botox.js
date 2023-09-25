import React from 'react';
import Image from "next/image";
import BF_Botaxes from '../components/Compare/BF_Botaxes'


const botox = () => {
  return (
    <div className='bg-[#0000008e]'>
              <Image
             className=" fixed -z-20 top-0 w-[100%] md:w-screen object-cover h-full "
             src="/images/botoxmodel.jpg"
             width='1200'
             height='800'
             alt="CEO"
            />

      <div className='py-12 '>
        {/* <div className='flex flex-row-reverse md:flex-col justify-center items-center min-h-screen w-full' >
    
          <div className='w-1/2 flex justify-center items-center md:w-full'>
              <p text-right>...........<br></br>.................</p>
            <div>
              <Image
                    className="   bg-top w-32     object-contain  "
                    src="/images/face1.jpg"
                    width='100'
                    height='100'
                    alt="CEO"
                    />
    
            </div>
    
          </div>
    
          <div className='w-1/2 md:w-full'>
            <video   autoPlay loop muted  className="  object-cover  "  >
                <source   src="/video/bg.mp4"   type="video/mp4"  />
                    Your browser does not support the video tag.
                </video>
    
          </div>
    
    
        </div> */}
          <p className='text-center text-xl text-gray-50 pt-12'>نمونه کارهای بوتاکس</p>
        <div className=' flex flex-row-reverse space-x-4 justify-center items-center py-6 mt-8'>
          <Image
             className=" object-cover rounded-md  w-28 border border-red-500 shadow-md  shadow-rose-500 "
             src="/images/dr16.jpg"
             width='400'
             height='400'
             alt="CEO"
            />
            <div className='flex flex-col justify-center pr-6 items-center'>
                <p className='text-right text-gray-50 w-full'> ........دکتر </p>
                <p className='text-right text-gray-50 w-full'> ...........................<br></br>......................بیوگرافی </p>
            </div>

        </div>
          <BF_Botaxes/>
  
      </div>
    </div>
    )
}

export default botox