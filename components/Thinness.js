import React from 'react'
import Image from 'next/image';
import ThinnessCampare1 from './Compare/ThinnessCampare1';

// import Link from 'next/link';




const Thinness = () => {

  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full py-8 bg-[#0f1a20f6]    '>



      <div className='flex md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center h-[30%]  items-center w-1/2 md:w-full'>
          <ThinnessCampare1/>             
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl text-center w-full py-2 px-6 text-gray-200  font-bold pt-4'>بخش لاغری</p>
             
              <p className='text-xl text-center w-full py-2 px-6 text-gray-200   pt-4'>Cryolipolysis  2023</p>
         
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
            لاغری موضعی یکی از روش‌های نوین درمان چاقی است که این‌روزها طرفداران زیادی دارد. همه ما نه تنها با شرایط یکسانی متولد نمی‌شویم، بلکه عوامل ارثی، اکتسابی یا برخی وقایع می‌توانند بر میزان چربی بدنمان در نواحی مختلف اثرگذار باشند  
            </p>
        </div>
      </div>
      

    </div>
  )
}

export default Thinness