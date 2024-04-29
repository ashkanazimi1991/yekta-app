import React from 'react'
// import Image from 'next/image';
import BF_facial from './Compare/BF_facial';
// import ModalT from './ModalT';
// import Link from 'next/link';
// import ToolsSlider from './ToolsSlider';



const Fecial = () => {

  return (
    <div className='flex flex-col space-y-6 justify-center items-center w-full py-8 bg-[#f5e5d4] h-screen md:h-full   '>

    

      <div className='flex flex-row-reverse md:flex-col-reverse w-full px-5'>
        <div className='flex justify-center  items-center w-1/2 md:w-full'>
    

        <BF_facial/>
​        
        </div>

        <div className='flex flex-col justify-center  items-center w-1/2 md:w-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl text-right w-full py-2 px-6 text-gray-600  font-bold pt-4'>بخش فشیال</p>
             
         
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
            فیشیال  یکی از شیوه‌های درمانی و زیبایی عمیق پوست است.که در یک جلسه درمانی زیبایی به طول یک یا دو ساعت انجام می شود و شامل مراحل گوناگونی است پس از پایان این مراحل، پوست شما روشن، لطیف و زیبا خواهد شد. که باعث سلامتی، شادابی، جوان سازی و پاکسازی پوست صورت شما می هدف اصلی از انجام فشیال پوست، بهبود شرایط پوست است که شما می‌توانید در مدت‌زمان کوتاهی نتیجه آن را مشاهده کنید. بسیاری از افراد به انجام فیشال  برای پیشگیری از پیری پوست می‌پردازند            </p>
        </div>
      </div>
      

        {/* </div> */}
      {/* </div> */}


 
 


    </div>
  )
}

export default Fecial