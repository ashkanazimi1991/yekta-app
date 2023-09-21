import React from 'react';
import Image from 'next/image';
import ThinnessCampare1 from './Compare/ThinnessCampare1';

import Link from 'next/link';



const Thinness = () => {
  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full min-h-screen bg-[#0f1a20f6]    '>

    <div className='flex flex-col py-6  justify-center w-full items-center
    bg-via-gray-100'>
    
    <div className='flex flex-col space-y-6 justify-center items-center px-6  w-full py-6'>

  <div className='flex md:flex-col-reverse w-full'>
    <div className='flex justify-center  items-center w-1/2 md:w-full'>
        {/* <Image
                    className=" w-full object-cover rounded-xl m-4 border-2 border-gray-300"
                    src="/images/thinde01.jpg"
                    width='800'
                    height='800'
                    alt="کلینیک یکتا"
                    /> */}


<ThinnessCampare1/>             

    </div>

    <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
    <p className='text-2xl text-right w-full py-6 px-6 text-gray-200 font-bold pt-4'>بخش لاغری</p>

        <p className='text-right text-md text-gray-300 px-6 leading-loose'>
        لاغری موضعی یکی از روش‌های نوین درمان چاقی است که این‌روزها طرفداران زیادی دارد. همه ما نه تنها با شرایط یکسانی متولد نمی‌شویم، بلکه عوامل ارثی، اکتسابی یا برخی وقایع می‌توانند بر میزان چربی بدنمان در نواحی مختلف اثرگذار باشند  
        </p>

        <Link href="/fit"> 
        <p className='bg-[#000] px-3 py-3 my-5 cursor-pointer rounded-full text-white border-2 border-gray-50'>مشاهده همه نمونه کارهای لاغری</p>
        </Link>
    </div>
  </div>
  
    {/* <ThinnessCampare/> */}

    {/* <div className='flex justify-center pb-6 items-center bg-via-gray-100 '>

    </div> */}
    </div>
  </div>


 
 


    </div>
  )
}

export default Thinness