import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
// import {GiHeartOrgan,GiBrain,GiBeastEye,GiHealthPotion} from  'react-icons/gi';
// import {FaLungs,FaBone} from  'react-icons/fa';
// import Image from 'next/image';
import Slider from "react-slick";


// import img1 from '../../public/images/facial.jpg'
// import img2 from '../../public/images/laser.jpg'
// import img3 from '../../public/images/co2.jpg'
// import img4 from '../../public/images/thinness.jpg'
// import img5 from '../../public/images/botax.jpg'
// import img6 from '../../public/images/filler.jpg'







export default class FiledSlider extends Component {

  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      slidesToShow: 6,
      swipeToSlide: true,
      speed: 1500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            // slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 5,
            // slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},{
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }},{
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            // slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    return (
      <div className="container w-full px-[10%] xl:px-0 pt-40  overflow-hidden">
        <Slider {...settings}>
     
        <div className="flex flex-col justify-center items-center " >
          <div className=' flex justify-center items-center w-28   mx-4    h-28 '>
               <img  src='/images/facial.jpg'  alt="کلینیک زیبایی یکتا" width='280' height='150'
                  className="  rounded-full border-6  w-28 h-28 border-rose-600 p-1 shadow shadow-[#E08798]  object-cover "/>
          </div>
             <p className='text-center  w-36  text-gray-800 py-2 '>فشیال</p> 
   </div>
         



    <div className="flex flex-col justify-center items-center" >
          <div className=' flex justify-center items-center w-28   mx-4   h-28 '>
               <img  src='/images/laser.jpg'  alt="کلینیک زیبایی یکتا" width='280' height='150'
                  className="  rounded-full w-28 h-28  border-6   border-rose-600 p-1 shadow shadow-[#E08798] object-cover "/>
          </div>
             <p className='text-center  w-36 text-gray-800 py-2 '>لیزر
             </p> 
   </div>

    
             
     <div className="flex flex-col justify-center items-center" >
          <div className=' flex justify-center items-center w-28   mx-4   h-28 '>
               <img  src='/images/co2.jpg'  alt="کلینیک زیبایی یکتا" width='150' height='150'
                  className="  rounded-full border-6   border-rose-600 p-1 shadow shadow-[#E08798] w-28 h-28   object-cover "/>
          </div>
             <p className='text-center  w-36 text-gray-800 py-2 '>CO2</p> 
   </div>
   


   <div className="flex flex-col justify-center items-center" >
          <div className=' flex justify-center items-center w-28   mx-4   h-28 '>
               <img  src='/images/thinness.jpg'  alt="کلینیک زیبایی یکتا" width='280' height='150'
                  className="  rounded-full border-6   border-rose-600 p-1 shadow shadow-[#E08798] w-28 h-28   object-cover "/>
          </div>
             <p className='text-center  w-36 text-gray-800 py-2 '>لاغری</p> 
       </div>


         <div className="flex flex-col justify-center items-center" >
          <div className=' flex justify-center items-center w-28   mx-4   h-28 '>
               <img  src='/images/botax.jpg'  alt="کلینیک زیبایی یکتا" width='280' height='150'
                  className="  rounded-full border-6   border-rose-600 p-1 shadow shadow-[#E08798] w-28 h-28   object-cover "/>
          </div>
             <p className='text-center  w-36 text-gray-800 py-2 '>بوتاکس</p> 
       </div>


       <div className="flex flex-col justify-center items-center" >
          <div className=' flex justify-center items-center w-28   mx-4   h-28 '>
               <img  src='/images/filler.jpg'  alt="کلینیک زیبایی یکتا" width='280' height='150'
                  className="  rounded-full border-6   border-rose-600 p-1 shadow shadow-[#E08798] w-28 h-28   object-cover "/>
          </div>
             <p className='text-center  w-36 text-gray-800 py-2 '>فیلر</p> 
       </div>


        </Slider>
      </div>
    );
  }
}
