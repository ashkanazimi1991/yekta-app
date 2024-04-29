import React from 'react'
// import Image from 'next/image';

import BF_tato from './Compare/BF_tato';
// import ModalT from './ModalT';
// import Link from 'next/link';
// import ToolsSlider from './ToolsSlider';



const Tato = () => {

  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full py-8 bg-[#f5e5d4] h-screen md:h-full   '>

    

      <div className='flex flex-row-reverse md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center  items-center w-1/2 md:w-full'>
    

        <BF_tato/>
​        
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl text-center w-full py-2 px-6 text-gray-600  font-bold pt-4'>بخش لیزر تتو</p>
              <p className='text-xl text-center w-full py-2 px-6 text-gray-600   pt-4'>PicoSure Q-switch Laser</p>

             
              
             </div>
             <img
             className="  w-20 object-cover  rounded-md h-20 "
             src="/images/yekta_logoIn.png"
             width='200'
             height='200'
             alt="کلینیک زیبایی یکتا"
            />
          </div>

            <p className='text-right  text-md sm:text-sm sm:leading-loose py-4 md:text-center text-gray-600 px-6 leading-loose'>
            دستگاه لیزر کیوسوئیچ پیکوشور  بعنوان نسل جدید دستگاه‌های لیزر جهت پاک کردن تاتو‌های ناخواسته معرفی شده است. این دستگاه با مدل  در بازار شناخته می‌شود. علت محبوبیت و استقبال بالای پزشکان و بیماران از این دستگاه به کارگیری آخرین فناوری‌های لیزر کیوسوئیچ در آن است. به طوری که می‌توان ادعا کرد در حال حاضر پیشرفته‌ترین دستگاه برای حذف لیزر تاتو می‌باشد            </p>
        </div>
      </div>
      

        {/* </div> */}
      {/* </div> */}


 
 


    </div>
  )
}

export default Tato