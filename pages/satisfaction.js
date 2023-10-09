import React from 'react';
import Head from 'next/head';
import Image from 'next/image';


const satisfaction = () => {
  return (
    <div>
      <Head>
        <title>Yekta Beauty Clinic </title>
        <meta name="description" content="کلینیک زیبایی یکتا" />
        <meta name="theme-color" content="#142028"/>
        <link rel="icon" href="/images/yekta_logo.png" />
        <link rel='manifest' href='/manifest.json' />  
     </Head>


     <img
             className=" fixed -z-20 top-0 w-[100%] md:w-screen object-cover h-full "
             src="/images/modelbody.jpg"
             width='1200'
             height='800'
             alt="CEO"
            />

<div className='w-full px-5 py-24 flex flex-col justify-center items-center bg-[#ffffffd2] min-h-screen '>

<p className='text-gray-500 text-center py-6 '>نظرات مراجعه کنندگان  </p> 
    <div className='grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 w-ful gap-6 px-[5%] md:px-0  '>
    <div className='flex flex-col space-y-4 justify-center items-center bg-gray-100 p-10 shadow-xl w-full rounded-xl transition-all duration-500 ease-in-out   hover:scale-100'>
      <img width='400' height='400'
             src="/images/face1.jpg" alt="" 
             className="object-cover w-32 h-32 rounded-full   brightness-95 ring-4 ring-gray-300"
             />
             
          <p className='text-gray-400 text-center  '>سارا کیان </p> 
             
          <p className='text-gray-500 text-sm text-center  leading-loose '>با تشکر از مجموعه حرفه ای یکتا </p>
          <video   controls  className=" rounded-lg  object-cover "  >
            <source   src="/video/bg.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
      </div>
      <div className='flex flex-col space-y-4 justify-center items-center bg-gray-100 p-10 shadow-xl w-full rounded-xl transition-all duration-500 ease-in-out   hover:scale-100'>
      <img width='400' height='400'
             src="/images/face1.jpg" alt="" 
             className="object-cover w-32 h-32 rounded-full   brightness-95 ring-4 ring-gray-300"
             />
             
          <p className='text-gray-400 text-center  '>سارا کیان </p> 
             
          <p className='text-gray-500 text-sm text-center  leading-loose '>با تشکر از مجموعه حرفه ای یکتا </p>
          <video   controls  className=" rounded-lg  object-cover "  >
            <source   src="/video/bg.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
      </div> 
      
      <div className='flex flex-col space-y-4 justify-center items-center bg-gray-100 p-10 shadow-xl w-full rounded-xl transition-all duration-500 ease-in-out   hover:scale-100'>
      <img width='400' height='400'
             src="/images/face1.jpg" alt="" 
             className="object-cover w-32 h-32 rounded-full   brightness-95 ring-4 ring-gray-300"
             />
             
          <p className='text-gray-400 text-center  '>سارا کیان </p> 
             
          <p className='text-gray-500 text-sm text-center  leading-loose '>با تشکر از مجموعه حرفه ای یکتا </p>
          <video   controls  className=" rounded-lg  object-cover "  >
            <source   src="/video/bg.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
      </div>



      <div className='flex flex-col space-y-4 justify-center items-center bg-gray-100 p-10 shadow-xl w-full rounded-xl transition-all duration-500 ease-in-out   hover:scale-100'>
      <img width='400' height='400'
             src="/images/face1.jpg" alt="" 
             className="object-cover w-32 h-32 rounded-full   brightness-95 ring-4 ring-gray-300"
             />
             
          <p className='text-gray-400 text-center  '>سارا کیان </p> 
             
          <p className='text-gray-500 text-sm text-center  leading-loose '>با تشکر از مجموعه حرفه ای یکتا </p>
          <video   controls  className=" rounded-lg  object-cover "  >
            <source   src="/video/bg.mp4"   type="video/mp4"  />
                Your browser does not support the video tag.
            </video>
      </div>   
      
      

    </div>

</div>



    </div>
  )
}

export default satisfaction