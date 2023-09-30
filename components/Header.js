import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { BiHomeSmile } from 'react-icons/bi';

// import Nav from './Nav';
import ModalT from './ModalT';
import { BsChatLeftHeart,BsCardHeading, BsCalendarDate,BsCalendarCheck,BsCalendar2Heart } from 'react-icons/bs';

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  // const [isOpen, setIsOpen] = useState(false);

  // const handleOpen = () => {
  //   setIsOpen(true);
  // };

  // const handleClose = () => {
  //   setIsOpen(false);
  // };
  return (
    <div className='fixed w-full mt-2 flex justify-center   top-0 left-0'>
        <div className='flex w-full bg-[#0f1a20c7]  mx-6 rounded-md h-16 pr-2 justify-between items-center'>
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

       

           <button  className="text-sm  l py-2 px-6 flex justify-center items-center animate-pulse  text-purple-500"   onClick={openModal}>
           <PiDotsThreeOutlineVerticalFill className='text-[#E08798] text-3xl '/>
         {/* <AiOutlineFolderOpen className='text-green-400  text-xl text-cernter mx-4 cursor-pointer'/> */}
              </button>
              <ModalT isOpen={isModalOpen} onClose={closeModal} >
              <div className="flex  flex-col justify-center pt-10 items-center h-full">
           
  
              
              
           
              <Link className="w-full" target='blank' href='/about'>
           <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-md shadow-2xl  items-center">
        
           <div className='flex justify-center items-center'>

            <h3 className="text-gray-100 text-center w-full px-4 py-2"> صفحه اصلی</h3>
            <BiHomeSmile className="text-2xl mr-4 text-gray-100" />
           </div>
           </button>
         </Link>



           <Link className="w-full" target='blank' href='https://boghrat.com/clinics/yekta-aesthetic-group/%DA%A9%D9%84%DB%8C%D9%86%DB%8C%DA%A9-%DB%8C%DA%A9%D8%AA%D8%A7'>
         <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-md shadow-2xl  items-center">
           {/* <Image  src={img2}  alt="carnet" width='450' height='150'
             className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
  
           <div className='flex justify-center  items-center'>

            <h3 className="text-gray-100 text-center w-full px-4 py-2"> دریافت نوبت</h3>
            <BsCalendarDate className="text-2xl mr-4 text-gray-100" />
           </div>

        </button>
            </Link>

            <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-md shadow-2xl  items-center">
           {/* <Image  src={img2}  alt="carnet" width='450' height='150'
             className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
  
           <div className='flex justify-center items-center'>
            <h3 className="text-gray-100 text-center w-full px-4 py-2"> نمونه کارها</h3>
            <BsCalendarCheck className="text-2xl mr-4 text-gray-100" />
           </div>

        </button>

        <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-md shadow-2xl  items-center">
           {/* <Image  src={img2}  alt="carnet" width='450' height='150'
             className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
  
           <div className='flex justify-center items-center'>
            <h3 className="text-gray-100 text-center w-full px-4 py-2"> رضایتمندها  </h3>
            <BsCalendar2Heart className="text-2xl mr-4 text-gray-100" />
           </div>

           </button>


           <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-md shadow-2xl  items-center">
           {/* <Image  src={img2}  alt="carnet" width='450' height='150'
             className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
  
           <div className='flex justify-center items-center'>
            <h3 className="text-gray-100 text-center w-full px-4 py-2"> مقالات</h3>
            <BsCardHeading className="text-3xl mr-4 text-gray-100" />
           </div>

           </button>


        

         
           <Link className="w-full" target='blank' href='/about'>
           <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-md shadow-2xl  items-center">
        
           <div className='flex justify-center items-center'>

            <h3 className="text-gray-100 text-center w-full px-4 py-2"> ارتباط با ما</h3>
            <BsChatLeftHeart className="text-2xl mr-4 text-gray-100" />
           </div>
           </button>
         </Link>


   


       </div>
              </ModalT>
            {/* <button onClick={handleOpen}>
             <PiDotsThreeOutlineVerticalFill className='text-[#E08798] text-3xl '/>
               </button>
           <Nav isOpen={isOpen} onClose={handleClose} /> */}
           </div>
        </div>
    </div>
  )
}

export default Header