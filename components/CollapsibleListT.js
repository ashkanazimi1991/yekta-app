import ThinnessCampare from './Compare/ThinnessCampare';
import React, { useState } from 'react';


const CollapsibleListT = () => {
  const [isVisible, setIsVisible] = useState(false);

 const handleToggle = () => {
    setIsVisible(!isVisible);
 };

 return (
    <div className='bg-[#f0f0f0]'>
      <button onClick={handleToggle} className='flex justify-center w-full py-4 animate-pulse text-purple-500 '>
        {isVisible ? 'مشاهده کمتر' : 'مشاهده بیشتر'} 
      </button>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
      <ThinnessCampare/>
      </div>
    </div>
 );
};


export default CollapsibleListT;