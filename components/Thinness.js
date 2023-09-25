import React from 'react';
// import Image from 'next/image';
import ThinnessCampare1 from './Compare/ThinnessCampare1';

// import Link from 'next/link';



const Thinness = () => {
  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full min-h-screen bg-[#0f1a20f6]    '>

        {/* <div className='flex flex-col py-6  justify-center w-full items-center   bg-via-gray-100'> */}
        
        {/* <div className='flex flex-col space-y-6 justify-center items-center px-6  w-full py-6'> */}

      <div className='flex md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center  items-center w-1/2 md:w-full'>
          <ThinnessCampare1/>             
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
        <p className='text-2xl text-right w-full py-6 px-6 text-gray-200 font-bold pt-4'>بخش لاغری</p>

            <p className='text-right text-md py-4 text-gray-300 px-6 leading-loose'>
            لاغری موضعی یکی از روش‌های نوین درمان چاقی است که این‌روزها طرفداران زیادی دارد. همه ما نه تنها با شرایط یکسانی متولد نمی‌شویم، بلکه عوامل ارثی، اکتسابی یا برخی وقایع می‌توانند بر میزان چربی بدنمان در نواحی مختلف اثرگذار باشند  
            </p>
        </div>
      </div>
      

        {/* </div> */}
      {/* </div> */}


 
 


    </div>
  )
}

export default Thinness