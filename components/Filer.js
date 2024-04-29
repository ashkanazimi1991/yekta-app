import React from 'react'
import Image from 'next/image';
import BF_filer from './Compare/BF_filer';
// import ModalT from './ModalT';
// import Link from 'next/link';
// import ToolsSlider from './ToolsSlider';



const Filer = () => {

  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full py-8 bg-[#f0f0f0]  h-screen md:h-full    '>

        {/* <div className='flex flex-col py-6  justify-center w-full items-center   bg-via-gray-100'> */}
        
        {/* <div className='flex flex-col space-y-6 justify-center items-center px-6  w-full py-6'> */}

      <div className='flex md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center  items-center w-1/2 md:w-full'>
          <BF_filer/>             
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl text-right w-full py-2 px-6 text-gray-800  font-bold pt-4'>بخش فیلر</p>
             
          
             </div>
             <img
             className="  w-20 object-cover  rounded-md h-20 "
             src="/images/yekta_logoIn.png"
             width='200'
             height='200'
             alt="کلینیک زیبایی یکتا"
            />
          </div>

            <p className='text-right text-md sm:text-sm sm:leading-loose py-4 md:text-center text-gray-700 px-6 leading-loose'>
            لاغری موضعی یکی از روش‌های نوین درمان چاقی است که این‌روزها طرفداران زیادی دارد. همه ما نه تنها با شرایط یکسانی متولد نمی‌شویم، بلکه عوامل ارثی، اکتسابی یا برخی وقایع می‌توانند بر میزان چربی بدنمان در نواحی مختلف اثرگذار باشند  
            </p>
        </div>
      </div>
      

        {/* </div> */}
      {/* </div> */}


 
 


    </div>
  )
}

export default Filer