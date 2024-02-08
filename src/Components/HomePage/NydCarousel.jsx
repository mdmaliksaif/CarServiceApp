import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const responsive = {
  0: { items: 1 },
  720: { items: 2 },
  1024: { items: 2.5 }, // Change this to 5 items
};

const items = [

      
  <div className="flex flex-col items-center gap-5" data-value="1">
  <div><img className='rounded-xl w-[270px]' src="/images/ny1.png" alt="" /></div>
  <div className='font-bold'>Front Bumber Paint</div>
</div>,
<div className="flex flex-col items-center gap-5" data-value="1">
  <div><img className='rounded-xl w-[270px]' src="/images/ny2.png" alt="" /></div>
  <div className='font-bold'>Rubbing & Polishing</div>
</div>,
<div className="flex flex-col items-center gap-5" data-value="1">
  <div><img className='rounded-xl w-[270px]' src="/images/ny3.png" alt="" /></div>
  <div className='font-bold'>Deep All Round Spa</div>
</div>,
<div className="flex flex-col items-center gap-5" data-value="4">
  <div><img className='rounded-xl w-[270px]' src="/images/ny4.png" alt="" /></div>
  <div className='font-bold'>Standard Service</div>
</div>,

      


];

 export const NydCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 4 ? prevIndex - 1 : 0));
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < items.length-1  ? prevIndex+1 : items.length));
  };

  return (
    <div className='  w-[750px]  -mt-16 ml-10'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'></h2>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          animationDuration={1000}
          activeIndex={activeIndex}
        />
       
          <div
          className="absolute top-28 -right-7  transform -translate-x-1/2 bg-gray-300 w-30 h-30 rounded-xl cursor-pointer"
          onClick={slideNext}
        >
          <KeyboardArrowRightIcon className="text-gary-600" />
        </div>
        
        
          <div
          className="absolute top-28 left-0 transform -translate-x-1/2 bg-gray-300 rounded-full cursor-pointer"
          onClick={slidePrev}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon className="text-gary-600" />
        </div>
        
       
      </div>
    </div>
  );
};

