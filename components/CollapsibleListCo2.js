// import BF_Botaxes from './Compare/BF_Botaxes';
import Image from 'next/image';
import React, { useState } from 'react';


const CollapsibleListCo2 = () => {
  const [isVisible, setIsVisible] = useState(false);

 const handleToggle = () => {
    setIsVisible(!isVisible);
 };

 return (
    <div className='bg-[#0f1a20f6]'>
      <button onClick={handleToggle} className='flex justify-center w-full py-6 animate-pulse text-purple-500  '>
        {isVisible ? 'مشاهده کمتر' : 'مشاهده بیشتر'} 
      </button>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
        <div className='px-[15%] mt-9'>
        <Image
             className="  w-full  object-cover  rounded-xl bg-red-400 "
             src="/images/co203.jpg"
             width='1200'
             height='800'
             alt="کلینیک یکتا"
            />
            <p className='text-center px-8 sm:px-1 py-6 text-gray-300 text-sm leading-loose'>
            همچنین لیزر Co2 فرکشنال باعث تحریک کلاژن سازی پوست شده که همین موضوع تاثیر چشم گیری در کاهش و یا حتی رفع چین و چروک خواهد داشت.
به وسیله دستگاه لیزر فرکشنال Co2 بافت ‌های باقیمانده برای ترمیم بافت‌ های آسیب‌ دیده، شروع به تولید کلاژن و فاکتورهای ترمیمی می‌ کنند، بدین صورت پوست آرام آرام شروع به ترمیم می‌ کند. منافذ ریز عمیقی که بر روی پوست ایجاد می‌ شوند بسیار زیاد می ‌باشند. در واقع سلول‌ های سالم با تکثیر به محیط‌ های اطراف خود می‌ روند و بدین شکل، پوست ترمیم می‌ شود. این عمل باعث می ‌شود که پوست خود به ‌خود شروع به جوان شدن نماید. سوراخ ‌های ایجاد شده توسط لیزر بسیار ریز می‌‌ باشند و باید بر اساس مشکل هر فرد، تنظیم شوند، تنظیمات این دستگاه و کار با آن باید توسط یک پزشک متخصص پوست و مو صورت گیرد
            </p>
        </div>
      </div>
    </div>
 );
};


export default CollapsibleListCo2;