import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  780: { items: 3    },
};

const items = [
    <div className="item" data-value="1"><img className='w-40' src="/images/bosch.jpg" alt="" /> </div>,
    <div className="item" data-value="2"><img className='w-40' src="/images/mahle.jpg" alt="" /></div>,
    <div className="item" data-value="3"><img  className='w-40' src="/images/textar.jpg" alt="" /></div>,
    <div className="item" data-value="4"><img className='w-40' src="/images/valeo.jpg" alt="" /></div>,
    <div className="item" data-value="5"><img className='w-40' src="/images/sachs.jpg" alt="" /></div>,
];

export const CompanyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlidePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const handleSlideNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  return (
<div>
<div className='w-28 h-[2px] bg-red-500 ml-10 mt-5 mb-8'></div>
<h1 className='text-3xl font-bold  ml-10 -tracking-wide  '>Original Spare Parts</h1>
<h2 className='text-gray-500 ml-10 mt-3 '>Extended Warranty with S2Mechanic </h2>
    <div className='flex justify-center items-center w-[800px] relative  -mt-10 left-10 '>
      <div className='h-[200px] w-[600px] ml-36 '>
        <FaChevronCircleLeft
          className='absolute  text-slate-300 z-30 left-0 top-[88px] text-4xl cursor-pointer'
          onClick={handleSlidePrev}
        />
<div className='pr-10 -ml-28 mt-11'>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          activeIndex={activeIndex}
          controlsStrategy="alternate"
          animationDuration={2000}
          infinite
          animationType='slide'
          disableButtonsControls
          disableDotsControls
          keyboardNavigation
        />

</div>

        <FaChevronCircleRight
          className='absolute text-4xl text-slate-300 z-30 right-[64px] top-[85px] cursor-pointer'
          onClick={handleSlideNext}
        />
      </div>
    </div>

</div>
  );
};
