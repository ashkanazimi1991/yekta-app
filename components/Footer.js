import React from 'react';
import Link from "next/link";
import { FiPhone} from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
// import DownloadPWA from './DownloadPWA';

const Footer = () => {
    return (
        <footer className='flex flex-col  md:flex-col  justify-center py-2 bg-[#0f1a20f6]'>
          
          <div className=' w-full px-[10%] flex md:flex-col justify-center items-center py-4 '>
            <div className='flex  w-[300px]  '>
            <iframe className='rounded-xl bg-[#3f64aa38] p-4 brightness-50  hover:brightness-75' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d197.73301836896493!2d45.05192522390694!3d37.537901691832246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1695483487827!5m2!1sen!2sde" width="300" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='flex flex-col space-y-4 justify-center px-[10%] items-center w-1/2 md:w-full'>
            <Link href='tel:+984433459293'>
                <p className='text-right md:text-center text-sm text-gray-300 w-full '>044 3345 9293 : شماره تماس</p>
            </Link>
                <p className='text-right md:text-center text-sm text-gray-300 leading-loose  '>ارومیه، خیابان حسنی،نبش مجتمع تفریحی ژابیز،ساختمان ماندگار،طبقه 8واحد 806</p>
            </div>
          </div>
          
          
            <div className="flex justify-center md:w-full  ">
                <ul className="flex items-center justify-center gap-4  ">
                    <li>
                        <Link href='tel:+984433459293'>
                            <FiPhone className='text-xl text-[#f7f7f7] transition hover:text-purple-700/75 '/> 
                        </Link> 
                    </li>
                    <li>
                        <Link href='https://www.instagram.com/yekta_aesthetic_group' target='_blank'  aria-label='Instagram'>
                            <FaInstagram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer transition hover:text-purple-700/75'/> 
                        </Link>
                    </li>
                
                    <li>
                        <Link href='https://t.me/AshkanAzimiii' target='_blank'  aria-label='telegram'>
                            <TbBrandTelegram className='my-4 w-10 text-2xl text-[#fff] cursor-pointer transition hover:text-purple-700/75 '/> 
                        </Link>  
                    </li>
                    <li>
                        <Link href="mailto:info@onlineceo.org" target='_blank'  aria-label='mail'>
                            <HiOutlineMail className=' my-4 w-10 text-2xl text-[#fff] cursor-pointer transition hover:text-purple-700/75 '/> 
                        </Link>  
                    </li>
            
                </ul>
            </div>
            {/* <DownloadPWA /> */}
            <div className='flex flex-col justify-center items-center '>
                <p className="text-sm text-center  text-gray-500 ">
                Copyright &copy; 2023. All rights reserved for Yekta Clinic 
                </p>
                <Link href='https://onlineceo.org/'>
                   <p className='text-blue-300 py-2 text-sm text-center'>Power By CEO Community</p>

                </Link>
            </div>
        </footer>
    );
}

export default Footer;

             