import React from 'react'
import { NydCarousel } from './NydCarousel'

const NewYearDeals = () => {
  return (
    <div>
        <div className='w-28 h-[2px] bg-red-500 ml-10 mt-5'></div>
        <h1 className='text-3xl font-bold mb-5 mt-5 ml-10 -tracking-wide '>New Year Special Deals</h1>
        <div>
            <NydCarousel/>
        </div>
    </div>
  )
}

export default NewYearDeals