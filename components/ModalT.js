import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const ModalT = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex  items-center justify-center p-4  bg-[#041316d0] opacity-100">
      <div ref={modalRef} className=" z-50  h-2/3 overflow-y-scroll scrollbar-hide   rounded shadow-lg  w-full max-w-md">
           {/* <Image
             className="  relative  -z-20 top-0 w-full  object-cover h-full "
             src="/images/bg-pink.jpg"
             width='1200'
             height='800'
             alt="CEO"
            /> */}
        {children}
      </div>
    </div>
  );
};

export default ModalT;


