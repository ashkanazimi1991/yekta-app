import React from 'react';
import Image from "next/image";
import ThinnessCampare from '../components/Compare/ThinnessCampare'


const fit = () => {
  return (
    <div className='py-12 mt-12'>
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
    <ThinnessCampare/>
    <ThinnessCampare/>
    <ThinnessCampare/>
    <ThinnessCampare/>
    <ThinnessCampare/>
    <ThinnessCampare/>
    <ThinnessCampare/>
    <ThinnessCampare/>


    </div>
    )
}

export default fit