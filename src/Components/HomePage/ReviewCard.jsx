import React from 'react'

const ReviewCard = ({ key,title, content, image, source, author, workshopName }) => {
  return (
    <div className='ml-5 relative mt-5 ' key={key}>
   
    <div><img className='absolute w-10 -top-5  z-30  left-3' src="/images/invertedComma.png" alt="" /></div>
<div className='flex flex-col w-[380px] h-[360px] bg-gray-100 border gap-12 p-4'>

    {/* 1st row */}
<div className='flex flex-col items-center gap-5 h-44'>
<h1 className='text-xl font-semibold'>{title}</h1>
<p className='text-gray-700 tracking-wider text-sm'>{content}</p>
</div>

{/* 2nd row */}
<div className='flex gap-3 items-center -mb-4'>
    <div><img className='w-10' src={image} alt="" /></div>
    <div>
        <div className='font-sans text-gray-900 font-medium'>{author}</div>
        <div className='text-sm text-gray-700'>{source}</div>
    </div>
</div>


{/* 3rd */}
<div>
    <div className='text-xs text-gray-500'>Workshop Name</div>
    <div className='text-sm'>{workshopName}</div>
</div>

</div>


    </div>
  )
}

export default ReviewCard