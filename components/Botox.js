import React from 'react';
import Link from 'next/link';
import BF_Botax from './Compare/BF_Botax';





const Botox = () => {
  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full min-h-screen  bg-[#000000c2]'>




  
    {/* ...........................................botax..........................  */}
<div className='flex flex-col py-6  justify-center w-full items-center
 bg-via-gray-100'>
  
  
  <p className='text-6xl text-gray-400  font-bold pt-4'>BOTOX</p>
  
  <div className='flex md:flex-col space-x-8 md:space-x-0 space-y-6 justify-center items-center   w-full py-6'>
 
  <BF_Botax/>


 <div className='flex flex-col justify-center itms-center'>
    <div className='grid grid-cols-3 md:grid-cols-2 gap-4 px-2'>
      {/* <p className='text-right px-5 rounded-full py-4 bg-[#DC4D4C] border-2 text-white text-xl border-gray-200 shadow-md rounded-t-lg flex justify-center items-center col-span-3 '>بوتاکس</p> */}
        <p className='text-center text-white  bg-[#0f1a20c7] w-44 h-24 sm:w-36 sm:h-14 flex justify-center
        rounded-full border-2 border-gray-200 shadow-md px-1 text-md items-center  leading-loose'>
          بوتاکس دور چشم </p>
          <p className='text-center text-gray-600  bg-[#faf8f8] w-44 h-24 sm:w-36 sm:h-14 flex justify-center
        rounded-full border-2 border-gray-200 shadow-md px-1 text-md items-center  leading-loose'>
          بوتاکس لبخند </p>
          <p className='text-center text-white  bg-[#0f1a20c7] w-44 h-24 sm:w-36 sm:h-14 flex justify-center
        rounded-full border-2  border-gray-200 shadow-md px-1 text-md items-center  leading-loose'>
          خط خنده </p>
          <p className='text-center text-gray-600  bg-[#faf8f8] w-44 h-24 sm:w-36 sm:h-14 flex justify-center
        rounded-full border-2 border-gray-200 shadow-md px-1 text-md items-center  leading-loose'>
          بوتاکس میگرن </p>
          <p className='text-center text-white  bg-[#0f1a20c7] w-44 h-24 sm:w-36 sm:h-14 flex justify-center
        rounded-full border-2 border-gray-200 shadow-md px-1 text-md items-center  leading-loose'>
          درمان تعریق  </p>
          <p className='text-center text-gray-600  bg-[#faf8f8] w-44 h-24 sm:w-36 sm:h-14 flex justify-center
        rounded-full border-2 border-gray-200 shadow-md px-1 text-md items-center  leading-loose'>
          بوتاکس دیسپورت</p>

      </div>
      <Link href="/botox"> 
      <button type="button" className='flex  justify-center w-full  py-12 items-center bg-via-gray-100 '>
        
          <p className='bg-[#000] text-center px-3 py-4 cursor-pointer rounded-full text-white border-2 border-gray-50'>مشاهده همه نمونه کارهای بوتاکس</p>
     
      </button>
     </Link>

 </div>
 

  

  </div>
  </div>


 
 


    </div>
  )
}

export default Botox