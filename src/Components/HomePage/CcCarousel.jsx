import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 3.5 }, // Change this to 5 items
};

const items = [
  <div className="flex flex-col items-center" data-value="1">
    <div><img className='p-4 h-44' src="/images/cu1.png" alt="" /></div>
    <div className='font-bold'>Batteries</div>
  </div>,
   <div className="flex flex-col items-center" data-value="2">
   <div><img className='p-4 h-44' src="/images/cu2.png" alt="" /></div>
   <div className='font-bold'>Brakes</div>
 </div>,
  <div className="flex flex-col items-center" data-value="3">
  <div><img className='p-4 h-44' src="/images/cu3.png" alt="" /></div>
  <div className='font-bold'>AC Parts</div>
</div>,
 <div className="flex flex-col items-center" data-value="4">
 <div><img className='p-4 h-44' src="/images/cu4.png" alt="" /></div>
 <div className='font-bold'>Clucth</div>
</div>,
 <div className="flex flex-col items-center" data-value="5">
 <div><img className='p-4 h-44' src="/images/cu5.png" alt="" /></div>
 <div className='font-bold'>Tyres</div>
</div>,
 <div className="flex flex-col items-center" data-value="6">
 <div><img className='p-4 h-44' src="/images/cu6.png" alt="" /></div>
 <div className='font-bold'>Steering</div>
</div>,
 <div className="flex flex-col items-center" data-value="7">
 <div><img className='p-4 h-44' src="/images/cu7.png" alt="" /></div>
 <div className='font-bold'>Suspension</div>
</div>,
 <div className="flex flex-col items-center" data-value="8">
 <div><img className='p-4 h-44' src="/images/cu8.png" alt="" /></div>
 <div className='font-bold'>Go Connect 2.0</div>
</div>,
 <div className="flex flex-col items-center" data-value="9">
 <div><img className='p-4 h-44' src="/images/cu9.png" alt="" /></div>
 <div className='font-bold'>Lights</div>
</div>,
 <div className="flex flex-col items-center" data-value="10">
 <div><img className='p-4 h-44' src="/images/cu10.png" alt="" /></div>
 <div className='font-bold'>Body Parts</div>
</div>,
 <div className="flex flex-col items-center" data-value="11">
 <div><img className='p-4 h-44' src="/images/cu11.png" alt="" /></div>
 <div className='font-bold'>Glasses</div>
</div>,
 <div className="flex flex-col items-center" data-value="12">
 <div><img className='p-4 h-44' src="/images/cu12.png" alt="" /></div>
 <div className='font-bold'>Car Spa</div>
</div>,
 <div className="flex flex-col items-center" data-value="13">
 <div><img className='p-4 h-44' src="/images/cu13.png" alt="" /></div>
 <div className='font-bold'>Car Detailing</div>
</div>,
 <div className="flex flex-col items-center" data-value="14">
 <div><img className='p-4 h-44' src="/images/cu14.png" alt="" /></div>
 <div className='font-bold'>Side</div>
</div>,


];

 export const CcCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  return (
    <div className='  w-[750px]  -mt-16 ml-10'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'></h2>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          animationDuration={500}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 3 && (
          <div
          className="absolute top-24 -right-7  transform -translate-x-1/2 bg-gray-300 w-30 h-30 rounded-xl cursor-pointer"
          onClick={slideNext}
        >
          <KeyboardArrowRightIcon className="text-gary-600" />
        </div>
        
        )}
        {activeIndex !== 0 && (
          <div
          className="absolute top-24 left-0 transform -translate-x-1/2 bg-gray-300 rounded-full cursor-pointer"
          onClick={slidePrev}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon className="text-gary-600" />
        </div>
        
        )}
      </div>
    </div>
  );
};

