import React from 'react'
// import Image from 'next/image';
import BF_Lifting from './Compare/BF_Lifting';
// import ModalT from './ModalT';
// import Link from 'next/link';
// import ToolsSlider from './ToolsSlider';



const Lifting = () => {

  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full py-8 bg-[#f0f0f0]  h-screen md:h-full   '>

        {/* <div className='flex flex-col py-6  justify-center w-full items-center   bg-via-gray-100'> */}
        
        {/* <div className='flex flex-col space-y-6 justify-center items-center px-6  w-full py-6'> */}

      <div className='flex md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center  items-center w-1/2 md:w-full'>
          <BF_Lifting/>             
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl text-center w-full py-2 px-6 text-gray-800  font-bold pt-4'> جوانسازی و لیفتینگ </p>
              <p className='text-xl text-center w-full py-2 px-6 text-gray-700   pt-4'>4D Ultra Hifu</p>
             
          
             </div>
             <img
             className="  w-20 object-cover  rounded-md h-20 "
             src="/images/yekta_logoIn.png"
             width='200'
             height='200'
             alt="کلینیک زیبایی یکتا"
            />
          </div>

            <p className='text-right text-md sm:text-sm sm:leading-loose py-4 md:text-center text-gray-600 px-6 leading-loose'>
            دستگاه هایفو چهار بعدی جدیدترین مدل هایفو می باشد که برای جوانسازی و لیفتینگ پوست استفاده می شود و بالا برنده سطح کلاژن سازی پوست است. این دستگاه برای حذف چین و چروک، کک و مک و آکنه، خط خنده و اخم کاربرد بسیار زیادی دارد. دستگاه هایفو 4 بعدی کاملاً غیر تهاجمی و بی خطر است و دارای تاییدیه های FDA  آمریکا و CE  اروپا می باشد.            </p>
        </div>
      </div>
      

        {/* </div> */}
      {/* </div> */}


 
 


    </div>
  )
}

export default Lifting