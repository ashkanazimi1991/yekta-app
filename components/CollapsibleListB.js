import BF_Botaxes from './Compare/BF_Botaxes';
import React, { useState } from 'react';


const CollapsibleListB = () => {
  const [isVisible, setIsVisible] = useState(false);

 const handleToggle = () => {
    setIsVisible(!isVisible);
 };

 return (
    <div className='bg-[#f5e5d4] '>
      <button onClick={handleToggle} className='flex justify-center w-full py-4 animate-pulse text-purple-500  '>
        {isVisible ? 'مشاهده کمتر' : 'مشاهده بیشتر'} 
      </button>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
      <BF_Botaxes/>
      </div>
    </div>
 );
};


export default CollapsibleListB;