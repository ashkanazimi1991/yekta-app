import React from 'react';
import Image from "next/image";
import ThinnessCampare from '../components/Compare/ThinnessCampare'


const fit = () => {
  return (
    <div>

        <Image
             className=" fixed -z-20 top-0 w-[100%] md:w-screen object-cover h-full "
             src="/images/modelbody.jpg"
             width='1200'
             height='800'
             alt="CEO"
            />
        <div className='py-24 '>
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



        </div>

    </div>
    )
}

export default fit