import React, { useState } from "react";
import Drawer from "./Drawer/Drawer";
// import Image from 'next/image';
import { CgMenuGridR } from "react-icons/cg";
import Link from "next/link";
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
      <div className="fixed w-full mt-2 z-50 flex justify-center pb-40  top-0 left-0">
        <div className="flex w-full   bg-gradient-to-r from-[#18544ed5] via-[#18544ee1] to-[#18544e60] shadow-md animate-fade-down animate-ease-in-out shadow-[#0000003b]  backdrop-blur-md mx-6 rounded-full h-16 md:h-12  md:justify-start justify-between items-center">
          <div className="flex space-x-2 justify-center items-center">
            <Link href="/">
              <img
                className=" rounded-full w-16 md:w-11 z-50"
                src="/images/sh-logo512.png"
                width="100"
                height="100"
                alt=" کلینیک شقاقی"
              />
            </Link>
            <Link href="/">
              <div>
                <p className="text-md md:text-xs  text-[#ffffff]">
                  Shaghaghi<br></br> Clinic
                </p>
                {/* <p className='text-xs text-gray-300'> Always Perfect</p> */}
              </div>
            </Link>
          </div>

          <div
            className="flex flex-row-reverse justify-center md:hidden  text-sm text-gray-50 space-x-4
           items-center"
          >
            <p className="px-3 text-sm whitespace-nowrap">صفحه اصلی</p>
            <p className="px-3 text-sm whitespace-nowrap">نمونه کارها</p>
            <p className="px-3 text-sm whitespace-nowrap">درباره ما</p>
            <p className="px-3 text-sm whitespace-nowrap">ارتباط با ما</p>
          </div>
        </div>
        <div className="pr-2 mt-2">
          <Drawer isOpen={isOpen} onClose={handleClose} />
          <div className="  flex justify-center items-center ">
            <button
              onClick={handleOpen}
              className=" flex justify-center items-center z-50
                  shadow-[#00000086] rounded-full  w-12 h-12 bg-gradient-to-r from-[#18544ed5] via-[#18544e] to-[#18544e60]"
            >
              <CgMenuGridR className="text-white text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
