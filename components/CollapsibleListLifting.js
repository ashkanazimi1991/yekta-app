import LiftingCompare from './Compare/LiftingCompare';
import React, { useState } from 'react';


const CollapsibleListLifting = () => {
  const [isVisible, setIsVisible] = useState(false);

 const handleToggle = () => {
    setIsVisible(!isVisible);
 };

 return (
    <div className='bg-[#000000c2]  '>
      <button onClick={handleToggle} className='flex justify-center w-full py-4 animate-pulse text-purple-500 '>
        {isVisible ? 'مشاهده کمتر' : 'مشاهده بیشتر'} 
      </button>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
      <LiftingCompare/>
      </div>
    </div>
 );
};


export default CollapsibleListLifting;