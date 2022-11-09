import React from 'react'
import Logo from '../assets/logoRoom.png';
import Me from '../assets/me.png'
import { useState } from 'react';
const Navbar = (props) => {
    const [open,setOpen]=useState(false)
    const burgerFlick = ()=>{
        setOpen(!open)
        console.log(open)
    }
  return (
    <>
    <div className='pl-[12%] pr-[12%] flex justify-between sticky  h-20 w-full bg-[#00a2db] m-auto'>
        {/* hamburger */}
        <div onClick={burgerFlick} className='md:hidden cursor-pointer flex w-[50%] justify-between items-center'>
            <div className='flex justify-around  items-center flex-col h-10'>
                <div className='bg-white h-1 w-10'></div>
                <div className='bg-white h-1 w-10'></div>
                <div className='bg-white h-1 w-10'></div>
            </div>
            <p className='text-white font-medium'>MATCHES</p>
        </div>
        

        {/* Left */}
        <div className='flex items-center'>
            <img className='hidden md:flex h-10' src={Logo} alt="logo" />
            <span className='hidden lg:flex ml-2 text-3xl font-medium text-white'>roommates</span>
            <span className='hidden lg:flex text-sm mt-3 text-white'>.com</span>
        </div>

        {/* Right */}
        <div className='flex items-center'>
            <ul className='flex text-white text-lg font-light cursor-pointer'>
                
                <li className='hidden md:flex font-semibold underline decoration-green-400 decoration-4 mr-8 '>MATCHES</li>
                <li className='hidden md:flex hover:underline decoration-green-300 decoration-4 mr-8'>SEARCH</li>
                <li className='hidden md:flex hover:underline decoration-green-300 decoration-4 mr-8'>FAVORITES</li>
                <li className='hidden md:flex hover:underline decoration-green-300 decoration-4 mr-8'>MESSAGES</li>
                
            </ul>
            <img className='h-12 w-12 mr-8 rounded-[100%] border-[3px] border-white' src={Me} alt="hi" />
        </div>
    </div>
    {/* only small menu! */}
    {open? <div className='flex absolute w-[100%] opacity-90 h-[100%]  bg-[#00a2db] flex-col'>
        <div className='flex justify-between items-center p-5'>
        <img className=' h-16' src={Logo} alt="logo" />
        <div>
            <span className='text-white text-3xl font-bold'>roommates</span>
            <span className='text-white mt-3'>.com</span>
        </div>
        <p onClick={burgerFlick} className='text-white cursor-pointer font-black text-[3rem]'>x</p>
        </div>
        <div>
        <ul className=' flex flex-col items-center text-white text-lg font-light cursor-pointer'>
                
                <li className='text-[2rem] font-semibold underline decoration-green-400 decoration-4 mt-10 '>MATCHES</li>
                <li className='text-[2rem] hover:underline decoration-green-300 decoration-4 mt-10'>SEARCH</li>
                <li className='text-[2rem] hover:underline decoration-green-300 decoration-4 mt-10'>FAVORITES</li>
                <li className='text-[2rem] hover:underline decoration-green-300 decoration-4 mt-10'>MESSAGES</li>
                
            </ul>
        </div>
    </div>:''}
   
    </>
  )
}

export default Navbar