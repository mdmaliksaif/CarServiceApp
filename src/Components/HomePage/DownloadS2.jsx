import React from 'react'

const DownloadS2 = () => {
  return (
    <div>
        <div className='w-[800px] h-[450px ml-10 mt-5'>
<div className='w-28 h-[2px] bg-red-500  mt-5'></div>

        <div className='text-3xl font-bold mb-5 mt-5  -tracking-wide'><h1>Download S2Mechanic App</h1></div>
         
<div className='flex items-center gap-5 '>
{/* left side */}
<div>
<img className='w-80' src="/images/ds2.jpg" alt="" />
</div>


{/* right side */}
<div className='w-[500px]'>
<div><h2 className='text-slate-700 mb-5 text-xl'>Choose and book a seamless car service experience and get upto Rs 750 off with the S2Mechanic App</h2></div>

<div className='flex gap-5 justify-center'>
    <div><img src="/images/gplink.png" className='h-12 w-40' alt="" /></div>
    <div><img src="/images/aslink.png" alt="" className='h-12 w-40' /></div>
</div>

<div className='w-[320px] h-12  ml-20 mt-5 flex items-center ring-gray-200 ring-1  '>
<div className='w-12 h-8 border-r-2'><img src="/images/flag.jpg" className='w-10 h-8 p-[1px]  ml-1' alt="" /></div>
<div>
<input maxLength={10} class="border-none focus:ring focus:ring-gray-300 focus:ring-opacity-0 w-[130px] p-1 " type="text" placeholder="Mobile Number"/>
</div>
<div><button className='ring-1 w-28 h-8 ml-5  text-red-500  ring-gray-200 '>GET APP LINK</button></div>
{/* <input class="border-none focus:outline-none" type="text" placeholder="Enter text..."></input> */}

</div>

</div>

</div>


        </div>
    </div>
  )
}

export default DownloadS2