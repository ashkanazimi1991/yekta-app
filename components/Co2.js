import React from 'react'
// import Image from 'next/image';
import BF_co2 from './Compare/BF_co2';
// import ModalT from './ModalT';
// import Link from 'next/link';
// import ToolsSlider from './ToolsSlider';



const Co2 = () => {

  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full py-8 bg-[#f0f0f0]  h-screen md:h-full    '>

        {/* <div className='flex flex-col py-6  justify-center w-full items-center   bg-via-gray-100'> */}
        
        {/* <div className='flex flex-col space-y-6 justify-center items-center px-6  w-full py-6'> */}

      <div className='flex md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center  items-center w-1/2 md:w-full'>
          <BF_co2/>             
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl text-center w-full py-2 px-6 text-gray-800  font-bold pt-4'>بخش لیزر فرکشنال </p>
              <p className='text-xl text-center w-full py-2 px-6 text-gray-700   pt-4'>CO2 Fractional ADSS</p>
             
          
             </div>
             <img
             className="  w-20 object-cover  rounded-md h-20 "
             src="/images/yekta_logoIn.png"
             width='200'
             height='200'
             alt="کلینیک زیبایی یکتا"
            />
          </div>

            <p className='text-right text-md sm:text-sm sm:leading-loose py-4 md:text-center text-gray-600 px-6  leading-loose'>
            دستگاه لیزر Co2 فرکشنال از کمپانی معتبر ADSS با نام تجاری SELENA جلوه ای از نوآوری در تکنولوژی است. لیزر Co2 فرکشنال روشی مناسب برای کاهش چین و چروک، جای زخم، جای آکنه و ضایعات پوستی از این قبیل موارد می باشد. لیزر Co2 فرکشنال با از بین بردن بیرونی ترین لایه پوست، مجددا این شانس را برای رشد دوباره به پوست می دهد تا لایه ای بدون نقص و درخشان جای لایه قدیمی را بگیرد                </p>
        </div>
      </div>
      

        {/* </div> */}
      {/* </div> */}


 
 


    </div>
  )
}

export default Co2