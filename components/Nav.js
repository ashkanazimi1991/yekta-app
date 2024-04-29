import React, { useRef, useEffect } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsChatLeftHeart,BsCardHeading, BsCalendarDate,BsCalendarCheck,BsCalendar2Heart } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';

import Link from 'next/link';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';

import { PiXBold } from 'react-icons/pi';


import Image from "next/image";




// import img1 from '../../public/images/s1.jpg'
// import img2 from '../../public/images/.png'


const Nav = ({ isOpen, onClose }) => {
  const NavRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (NavRef.current && !NavRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 overflow-hidden z-40 
      transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      {/* <div className="fixed inset-0 bg-gray-800  bg-opacity-5"></div> */}
      <div className="absolute inset-y-0 right-0  max-w-full h-full flex">
        <div
          ref={NavRef}
          className={`w-screen max-w-md transform transition ease-in-out duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="h-full bg-[#0b0c12e1] shadow-lg overflow-y-auto p-4">
            <button className="absolute top-2 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
           <div className=' flex justify-center items-center   w-12 h-12 rounded-full border'>
              <PiXBold className='text-white text-3xl '/>
            </div>
            </button>
           

            <div className="flex  flex-col justify-center pt-10 items-center h-full">
           
  
              
              
     



                <Link className="w-full" href='https://boghrat.com/clinics/yekta-aesthetic-group/%DA%A9%D9%84%DB%8C%D9%86%DB%8C%DA%A9-%DB%8C%DA%A9%D8%AA%D8%A7'>
              <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-full shadow-2xl  items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center  items-center'>

                 <h3 className="text-gray-100 text-center w-full px-4 py-2"> دریافت نوبت</h3>
                 <BsCalendarDate className="text-2xl mr-4 text-gray-100" />
                </div>

             </button>
                 </Link>

                 <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-full shadow-2xl  items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center items-center'>
                 <h3 className="text-gray-100 text-center w-full px-4 py-2"> نمونه کارها</h3>
                 <BsCalendarCheck className="text-2xl mr-4 text-gray-100" />
                </div>

             </button>

             <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-full shadow-2xl  items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center items-center'>
                 <h3 className="text-gray-100 text-center w-full px-4 py-2"> رضایتمندها  </h3>
                 <BsCalendar2Heart className="text-2xl mr-4 text-gray-100" />
                </div>

                </button>


                <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-full shadow-2xl  items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center items-center'>
                 <h3 className="text-gray-100 text-center w-full px-4 py-2"> مقالات</h3>
                 <BsCardHeading className="text-3xl mr-4 text-gray-100" />
                </div>

                </button>


             

              
                <Link className="w-full" href='/about'>
                <button className="flex w-full justify-end my-4  bg-gradient-to-l from-purple-500 hover:bg-gray-900 py-2 rounded-full shadow-2xl  items-center">
                {/* <Image  src={img2}  alt="carnet" width='450' height='150'
                  className=" h-3/4 rounded-t-xl w-1/3 drop-shadow-xl  object-contain "/> */}
       
                <div className='flex justify-center items-center'>

                 <h3 className="text-gray-100 text-center w-full px-4 py-2"> ارتباط با ما</h3>
                 <BsChatLeftHeart className="text-2xl mr-4 text-gray-100" />
                </div>
                </button>
              </Link>


        


            </div>


          </div>
        </div> 
      </div>
    </div>
  );
};

export default Nav;
