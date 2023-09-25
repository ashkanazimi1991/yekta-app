import BF_laseres from './Compare/BF_laseres';
import React, { useState } from 'react';


const CollapsibleListL = () => {
  const [isVisible, setIsVisible] = useState(false);

 const handleToggle = () => {
    setIsVisible(!isVisible);
 };

 return (
    <div className='bg-[#0f1a20f6] '>
      <button onClick={handleToggle} className='flex justify-center w-full py-4 animate-pulse text-gray-100 '>
        {isVisible ? 'مشاهده کمتر' : 'مشاهده بیشتر'} 
      </button>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
      <BF_laseres/>
      </div>
    </div>
 );
};


export default CollapsibleListL;