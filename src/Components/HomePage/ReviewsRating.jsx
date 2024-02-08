import React from 'react'
import ReviewCard from './ReviewCard'
import { RrCarousel } from './RrCarousel'

const ReviewsRating = () => {
  return (
    <div >
        <div className='w-28 h-[2px] bg-red-500 ml-10 mt-5 '></div>
       
       <div className='ml-20 w-[800px] flex mt-8 gap-28 '>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold'>2 million+</h1>
          <p className='text-xs text-gray-500'>Cars Serviced</p>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold'>1 million+</h1>
          <p className='text-xs text-gray-500'>Happy Customers</p>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold'><span>4.7</span><span>&nbsp;&#9733;</span></h1>
          <p className='text-xs text-gray-500'>Average Rating</p>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold'>800+</h1>
          <p className='text-xs text-gray-500'>Touch Points in India</p>
        </div>
       </div>



        <h1 className='text-3xl font-bold mb-5 mt-8 ml-10 -tracking-wide '>What Car Owners in Noida Say</h1>



        <div className='w-28 h-[2px] bg-red-500 ml-10 mt-8 -mb-3'></div>
        



    <RrCarousel/>



    </div>
  )
}

export default ReviewsRating