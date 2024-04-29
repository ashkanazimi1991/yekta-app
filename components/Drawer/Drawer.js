import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown, MdMapsHomeWork,MdSpaceDashboard } from "react-icons/md";
import { FaPeopleCarryBox, FaUserDoctor, FaHouseMedicalCircleCheck } from "react-icons/fa6";
import { RiArticleFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GiExitDoor } from "react-icons/gi";

const Drawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div   className={`fixed inset-0 min-h-screen overflow-hidden z-40 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none" }`} >
     
      <div className="fixed inset-0  blur-md  bg-opacity-75"></div>
    
      <div className="absolute inset-y-0   flex">
        <div  ref={drawerRef} className={`w-screen  transform transition ease-in-out duration-500 ${isOpen ? "translate-y-0" : "translate-y-full" }`} >
       

            <div className=" min-h-screen flex  bg-[#00000000] backdrop-blur-md justify-center items-center">
                       
                       
                        <div className=" grid grid-cols-3 animate-jump-in animate-once animate-duration-300   overflow-y-auto p-4">
                        

                            <button className="flex flex-col  justify-center items-center bg-[#18544E] p-6  shadow-xl shadow-[#0000005e]
                             rounded-md md:text-sm text-xl whitespace-nowrap  text-gray-100 scale-75
                              transition-transform ease-in-out hover:scale-100" onClick={onClose}>
                            <MdMapsHomeWork className="text-white my-2 text-4xl"/>
                            صفحه اصلی
                            </button>

                            <button className="flex flex-col  justify-center items-center bg-[#18544E] p-6  shadow-xl shadow-[#0000005e]
                             rounded-md md:text-sm text-xl whitespace-nowrap  text-gray-100 scale-75
                              transition-transform ease-in-out hover:scale-100" onClick={onClose}>
                            <MdSpaceDashboard className="text-white my-2 text-4xl"/>
                            داشبورد
                            </button>


                            <button className="flex flex-col  justify-center items-center bg-[#18544E] p-6  shadow-xl shadow-[#0000005e]
                             rounded-md md:text-sm text-xl whitespace-nowrap  text-gray-100 scale-75
                              transition-transform ease-in-out hover:scale-100" onClick={onClose}>
                            <FaPeopleCarryBox className="text-white my-2 text-4xl"/>
                             سفارش جدید
                            </button>

                            <button className="flex flex-col  justify-center items-center bg-[#18544E] p-6  shadow-xl shadow-[#0000005e]
                             rounded-md md:text-sm text-xl whitespace-nowrap  text-gray-100 scale-75
                              transition-transform ease-in-out hover:scale-100" onClick={onClose}>
                            <FaUserDoctor className="text-white my-2 text-4xl"/>
                            تماس با کارشناس
                            </button>


                            <button className="flex flex-col  justify-center items-center bg-[#18544E] p-6  shadow-xl shadow-[#0000005e]
                             rounded-md md:text-sm text-xl whitespace-nowrap  text-gray-100 scale-75
                              transition-transform ease-in-out hover:scale-100" onClick={onClose}>
                            <RiArticleFill className="text-white my-2 text-4xl"/>
                             مقالات
                            </button>

                            <button className="flex flex-col  justify-center items-center bg-[#18544E]p-6 bg-[#18544E] shadow-xl shadow-[#0000005e]
                             rounded-md md:text-sm text-xl whitespace-nowrap  text-gray-100 scale-75
                              transition-transform ease-in-out hover:scale-100" onClick={onClose}>
                            <FaChalkboardTeacher className="text-white my-2 text-4xl"/>
                            آموزش
                            </button>


                            <button className="flex flex-col  justify-center items-center bg-[#18544E] p-6  shadow-xl shadow-[#0000005e]
                             rounded-md md:text-sm text-xl whitespace-nowrap  text-gray-100 scale-75
                              transition-transform ease-in-out hover:scale-100" onClick={onClose}>
                            <BsMicrosoftTeams className="text-white my-2 text-4xl"/>
                            درباره ما 
                            </button>

                            <button className="flex flex-col  justify-center items-center bg-[#18544E] p-6  shadow-xl shadow-[#0000005e]
                             rounded-md md:text-sm text-xl whitespace-nowrap  text-gray-100 scale-75
                              transition-transform ease-in-out hover:scale-100" onClick={onClose}>
                            <FaHouseMedicalCircleCheck className="text-white my-2 text-4xl"/>
                            چک لیست
                            </button>

                            <button className="flex flex-col  justify-center items-center border border-rose-600 p-6  shadow-xl shadow-[#0000005e]
                             rounded-md md:text-sm text-xl whitespace-nowrap  text-rose-600 scale-75
                              transition-transform ease-in-out hover:scale-100" onClick={onClose}>
                            <GiExitDoor className="text-rose-600 my-2 text-4xl"/>
                             خروج
                            </button>

                   

                          
                            <button className=" flex  justify-center items-end col-span-3 p-8  text-xl  text-gray-100 scale-75 transition-transform ease-in-out hover:scale-100" onClick={onClose}>
                            <MdOutlineKeyboardArrowDown className='   text-6xl animate-fade-down animate-infinite animate-duration-[2000ms] animate-ease-linear text-rose-600 '/>

                            </button>

                        </div>



                        
            </div>

    




        </div> 
      </div>
    </div>
  );
};

export default Drawer;


{/* <Link href='/test' ></Link> */}