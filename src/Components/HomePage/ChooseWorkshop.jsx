import React from 'react'
import { ChCarousel } from './ChCarousel'

const ChooseWorkshop = () => {
  return (
    <div>
        <div className='w-28 h-[2px] bg-red-500 ml-10 mt-5'></div>
        <h1 className='text-3xl font-bold mb-5 mt-5 ml-10 -tracking-wide '>Choose the Workshop Near You</h1>
        <div><h2 className='ml-10 -mt-5 mb-3 text-gray-600 '>Schedule a Pickup Today!</h2></div>
        <div>
            <ChCarousel/>
        </div>

        <div className='w-28 h-[2px] bg-red-500 ml-10 mt-5'></div>
        <h1 className='text-3xl font-bold mb-5 mt-5 ml-10 -tracking-wide '>S2Mechnaic Guarantee</h1>

        <div className='w-[800px] h-40  ml-10  flex flex-wrap gap-5'>

  <div className='h-16 w-[350px] bg-blue-50 '><div className='ml-5 mt-5 font-semibold  text-xl'>Free Pickup Drop</div></div>
  <div className='h-16 w-[350px] bg-purple-50 '><div className='ml-5 mt-5 font-semibold  text-xl'>Genuine Parts</div></div>
  <div className='h-16 w-[350px] bg-green-50'><div className='ml-5 mt-5 font-semibold  text-xl'>30 Days Warranty</div></div>
  <div className='h-16 w-[350px] bg-yellow-50 '><div className='ml-5 mt-5 font-semibold  text-xl'>Affordable Prices</div></div>
</div>






    </div>
  )
}

export default ChooseWorkshop