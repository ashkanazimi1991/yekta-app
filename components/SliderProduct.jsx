import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import axios from 'axios'
// import './styles.css';


import {EffectCoverflow, Pagination } from 'swiper/modules';


const SliderProduct = () => {
  // const[sData,setSData]=useState([])
  // const[isLoading,setIsLoading]=useState(true)

// useEffect(()=>{
//   axios.get("https://api.ebsalar.com/api/v1/front/birth_day_students/").then(res=>{
//     setSData(res.data.results)
//     setIsLoading(false)
//   }).catch(
//     err=>console.log(err)
//   )
// },[])

// while(sData.length<4){
//   sData.push({
//     "id": 1,
//       "student": {
//         "first_name": "",
//         "last_name": "",
//         "avatar": ""
//       }
//   })

// }
// if(isLoading){
//   return(
//     <div>LOADING ...</div>
//   )
// }


  return (
  <Swiper
  // slidesPerView={'auto'}
    // width={}
  effect={'coverflow'}
  loop={true}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={3}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  spaceBetween={10}
  pagination={{
    clickable: true,
  }}

  breakpoints={{
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }}
  // autoplay={{
  //   delay: 8500,
  //   disableOnInteraction: false,
  // }}
  modules={[Pagination,EffectCoverflow ]}
  className="mySwiper flex w-full justify-center items-center"
>




<SwiperSlide className=' rounded-2xl   bg-gradient-to-t from-[#b77a7e]  to-[#51001d]   h-64      ' >
          <div className=' w-full   flex  justify-end items-center flex-col   rounded-2xl  h-[400px] md:h-80'> 
          <p className=' absolute text-gray-50 h-16 text-md md:text-sm bg-[#18544e8a] w-full text-center flex justify-center items-center  top-0 sm:top-2'> محصول تست</p>      
          {/* <button className='bg-[#b77a7e] px-4 py-2 whitespace-nowrap shadow rounded-md text-white'>
            مشاهده در فروشگاه
            </button>    */}
            <img 
            src="/images/s1003.jpg"
             alt='ebs'  width='600'
                        height='600' className=' -z-20 w-full h-full object-cover absolute top-0  rounded-md' />
          </div>
        </SwiperSlide>


        <SwiperSlide className=' rounded-2xl   bg-gradient-to-t from-[#b77a7e]  to-[#51001d]   h-64      ' >
          <div className=' w-full   flex  justify-end items-center flex-col   rounded-2xl  h-[400px] md:h-80'> 
          <p className=' absolute text-gray-50 h-16 text-md md:text-sm bg-[#18544e8a] w-full text-center flex justify-center items-center  top-0 sm:top-2'> محصول تست</p>      
          {/* <button className='bg-[#b77a7e] px-4 py-2 whitespace-nowrap shadow rounded-md text-white'>
            مشاهده در فروشگاه
            </button>    */}
            <img 
            src="/images/s1001.jpg"
             alt='ebs'  width='600'
                        height='600' className=' -z-20 w-full h-full object-cover absolute top-0  rounded-md' />
          </div>
        </SwiperSlide>


        <SwiperSlide className=' rounded-2xl   bg-gradient-to-t from-[#b77a7e]  to-[#51001d]   h-64      ' >
          <div className=' w-full   flex  justify-end items-center flex-col   rounded-2xl  h-[400px] md:h-80'> 
          <p className=' absolute text-gray-50 h-16 text-md md:text-sm bg-[#18544e8a] w-full text-center flex justify-center items-center  top-0 sm:top-2'> محصول تست</p>      
          {/* <button className='bg-[#b77a7e] px-4 py-2 whitespace-nowrap shadow rounded-md text-white'>
            مشاهده در فروشگاه
            </button>    */}
            <img 
            src="/images/s1002.jpg"
             alt='ebs'  width='600'
                        height='600' className=' -z-20 w-full h-full object-cover absolute top-0  rounded-md' />
          </div>
        </SwiperSlide>


        <SwiperSlide className=' rounded-2xl   bg-gradient-to-t from-[#b77a7e]  to-[#51001d]   h-64      ' >
          <div className=' w-full   flex  justify-end items-center flex-col   rounded-2xl  h-[400px] md:h-80'> 
          <p className=' absolute text-gray-50 h-16 text-md md:text-sm bg-[#18544e8a] w-full text-center flex justify-center items-center  top-0 sm:top-2'> محصول تست</p>      
          {/* <button className='bg-[#b77a7e] px-4 py-2 whitespace-nowrap shadow rounded-md text-white'>
            مشاهده در فروشگاه
            </button>    */}
            <img 
            src="/images/s1003.jpg"
             alt='ebs'  width='600'
                        height='600' className=' -z-20 w-full h-full object-cover absolute top-0  rounded-md' />
          </div>
        </SwiperSlide>


        <SwiperSlide className=' rounded-2xl   bg-gradient-to-t from-[#b77a7e]  to-[#51001d]   h-64      ' >
          <div className=' w-full   flex  justify-end items-center flex-col   rounded-2xl  h-[400px] md:h-80'> 
          <p className=' absolute text-gray-50 h-16 text-md md:text-sm bg-[#18544e8a] w-full text-center flex justify-center items-center  top-0 sm:top-2'> محصول تست</p>      
          {/* <button className='bg-[#b77a7e] px-4 py-2 whitespace-nowrap shadow rounded-md text-white'>
            مشاهده در فروشگاه
            </button>    */}
            <img 
            src="/images/s1002.jpg"
             alt='ebs'  width='600'
                        height='600' className=' -z-20 w-full h-full object-cover absolute top-0  rounded-md' />
          </div>
        </SwiperSlide>


        <SwiperSlide className=' rounded-2xl   bg-gradient-to-t from-[#b77a7e]  to-[#51001d]   h-64      ' >
          <div className=' w-full   flex  justify-end items-center flex-col   rounded-2xl  h-[400px] md:h-80'> 
          <p className=' absolute text-gray-50 h-16 text-md md:text-sm bg-[#18544e8a] w-full text-center flex justify-center items-center  top-0 sm:top-2'> محصول تست</p>      
          {/* <button className='bg-[#b77a7e] px-4 py-2 whitespace-nowrap shadow rounded-md text-white'>
            مشاهده در فروشگاه
            </button>    */}
            <img 
            src="/images/t1000.jpg"
             alt='ebs'  width='600'
                        height='600' className=' -z-20 w-full h-full object-cover absolute top-0  rounded-md' />
          </div>
        </SwiperSlide>


      </Swiper>
)
}

export default SliderProduct