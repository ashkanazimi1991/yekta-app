import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import Nav from './Nav'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className='fixed w-full mt-2 flex justify-center   top-0 left-0'>
        <div className='flex w-full bg-[#0f1a20c7]  mx-6 rounded-full h-16 pr-2 justify-between items-center'>
           <div className='flex space-x-2 justify-center items-center'>
        <Link href='/'>
           <Image
             className=" w-16"
             src="/images/yekta_logo_head.png"
             width='100'
             height='100'
             alt="کلینیک یکتا"
            />
        </Link>
          <div>
    <Link href='/'>

    <p className='text-sm font-bold text-[#E08798]'>YEKTA CLINIC</p>
    <p className='text-xs text-gray-400'> Always Perfect</p>
    </Link>
</div>
         </div>
           <div className=' flex justify-center items-center border  w-12 h-12 rounded-full border-[#E08798]'>

       
            <button onClick={handleOpen}>
             <PiDotsThreeOutlineVerticalFill className='text-[#E08798] text-3xl '/>
               </button>
           <Nav isOpen={isOpen} onClose={handleClose} />
           </div>
        </div>
    </div>
  )
}

export default Header