import React, { useState } from 'react';
import Drawer from './Drawer/Drawer';
// import Image from 'next/image';
import { CgMenuGridR } from "react-icons/cg";
import Link from 'next/link';
// import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

import { FaAngleRight } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  
  return (
    <div>

    <div className='fixed w-full mt-2 z-50 flex justify-center pb-40  top-0 left-0'>
        <div className='flex w-full  bg-[#18544E] shadow-md animate-fade-down animate-ease-in-out shadow-[#0000003b]  backdrop-blur-md mx-6 rounded-full h-16 md:h-12 pr-2 justify-between items-center'>
           <div className='flex space-x-2 justify-center items-center'>
        <Link href='/'>
           <img
             className=" bg-[#f1f1f1] shadow-md shadow-[#00000056] rounded-full w-16 md:w-11 z-50"
             src="/images/yekta_logo_head.png"
             width='100'
             height='100'
             alt="کلینیک یکتا"
            />
        </Link>
        <Link href='/'>
          <div>

        <p className='text-md md:text-xs text-[#fff]'>YEKTA CLINIC</p>
        {/* <p className='text-xs text-gray-300'> Always Perfect</p> */}
       </div>
        </Link>
         </div>
       

       
<div className='flex flex-row-reverse justify-center md:hidden font-bold text-sm text-white space-x-4 items-center'>
  <p className='px-3 text-sm whitespace-nowrap'>صفحه اصلی</p>
  <p className='px-3 text-sm whitespace-nowrap'>فروشگاه</p>
  <p className='px-3 text-sm whitespace-nowrap'>درباره ما</p>
  <p className='px-3 text-sm whitespace-nowrap'>ارتباط با ما</p>



</div>



           <button  className="text-md sm:text-sm text-white flex justify-center items-center  "   >
           ورود / ثبت نام
           <FaAngleRight className=' text-xl ml-4 md:text-md animate-fade-right animate-infinite animate-duration-[2000ms] animate-ease-in-out'/>
              </button>
          
      
           
     </div>
    
    </div>
      <Drawer isOpen={isOpen} onClose={handleClose} />
<div className='fixed bottom-4 w-full flex justify-center items-center '>
<button onClick={handleOpen} className=' flex justify-center items-center z-50
              shadow-[#00000086] bg-[#18544E] w-14 h-14 md:h-10 md:w-10 shadow-xl     rounded-md'>
                    <CgMenuGridR className='text-white text-2xl'/>
              </button>
</div>
              
    </div>
  )
}

export default Header