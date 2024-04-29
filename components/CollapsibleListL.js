import BF_laseres from './Compare/BF_laseres';
import React, { useState } from 'react';


const CollapsibleListL = () => {
  const [isVisible, setIsVisible] = useState(false);

 const handleToggle = () => {
    setIsVisible(!isVisible);
 };

 return (
    <div className='bg-[#f5e5d4]'>
      <button onClick={handleToggle} className='flex justify-center w-full py-4 animate-pulse text-purple-500 '>
        {isVisible ? 'مشاهده کمتر' : 'مشاهده بیشتر'} 
      </button>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
      <BF_laseres/>
      </div>
    </div>
 );
};


export default CollapsibleListL;