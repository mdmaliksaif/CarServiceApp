import React, { useState, useEffect, useRef } from 'react';

const TailHoverMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleButtonHover = () => {
    setIsOpen(true);
    clearTimeout(timeoutRef.current);
  };

  const handleButtonMouseOut = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleMenuMouseLeave = (event) => {
    if (!event.relatedTarget || !event.relatedTarget.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleGlobalMouseLeave = (event) => {
      if (!event.relatedTarget || !event.target.closest('.dropdown')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mouseleave', handleGlobalMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleGlobalMouseLeave);
    };
  }, []);

  return (
    <div className="relative">
      <button
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonMouseOut}
        className="text-white font-semibold py-2 px-4 outline-none"
      >
        More
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-36 -ml-6 bg-white outline-none dropdown"
          onMouseLeave={handleMenuMouseLeave}
          onMouseEnter={handleButtonHover}
        >
          <div className='w-5 h-5 absolute -top-[10px] left-10 z-0 bg-white transform rotate-45 border border-b-white border-r-white border-t-red-500 border-l-red-500'></div>
          <div className='p-3 pt-4 text-sm border border-t-red-500 space-y-1'>
            <a href="#faq" className="block px-4 py- h-5 hover:bg-gray-400">FAQ</a>
            <a href="#contact-us" className="block px-4 py- h-5 hover:bg-gray-400">Contact US</a>
            <a href="#terms" className="block px-4 py- h-5 hover:bg-gray-400">Terms</a>
            <a href="#privacy" className="block px-4 py- h-5 hover:bg-gray-400">Privacy</a>
            <a href="#offers" className="block px-4 py- h-5 hover:bg-gray-400">Offers</a>
            <a href="#reviews" className="block px-4 py- h-5 hover:bg-gray-400">Reviews</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TailHoverMenu;
