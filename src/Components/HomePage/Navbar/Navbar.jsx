import React from 'react'
import NavModal from './NavModal'
import TailHoverMenu from '../TailHoverMenu'
const Navbar = () => {

  

  return (
<div className="flex justify-between">
      {/* Left side */}
      <div className="mt-6 ml-4 w-[250px]">
        <img src="/images/Carservicelogo.png" alt="" />
      </div>
      {/* NavModal */}
      <div className='mt-6 -ml-[720px]'>
      <NavModal/>
        </div> 
     

{/* right Side */}

<div >
    <ul className='flex gap-5 text-xl mr-8 mt-6 items-center '>
      
        <li className='font-semibold text-white'>Blog</li>
        <li className='font-semibold text-black'><TailHoverMenu/></li>
        <button className='bg-red-600 w-20 h-9 font-mono text-white outline-none'>Login</button>
    </ul>
</div>






    </div>
  )
}

export default Navbar