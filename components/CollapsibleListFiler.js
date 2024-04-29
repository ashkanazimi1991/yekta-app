import BF_Filers from './Compare/BF_Filers';
import React, { useState } from 'react';


const CollapsibleListFiler = () => {
  const [isVisible, setIsVisible] = useState(false);

 const handleToggle = () => {
    setIsVisible(!isVisible);
 };

 return (
    <div className='bg-[#f0f0f0]  '>
      <button onClick={handleToggle} className='flex justify-center w-full py-4 animate-pulse text-purple-500  '>
        {isVisible ? 'مشاهده کمتر' : 'مشاهده بیشتر'} 
      </button>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
      <BF_Filers/>
      </div>
    </div>
 );
};


export default CollapsibleListFiler;