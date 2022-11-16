import React, { useState } from 'react'
import Male from '../assets/paaa.png'
import Perfect from '../assets/perfect.png'
import Star from '../assets/star.png'
import Black from '../assets/black.png'
import LightGirl from '../assets/emma.png'
import DarkGirl from '../assets/laquisha.png'
const Hero = (props) => {
    const [users,setUsers]=useState([
        {name:"Paul",
        type:"Roommate",
        city:"Cummings, CA",
        price:1700,
        active:"2 hours ago",
        perfect:true,
        female:false,
        color:'light'},
        {name:"John",
        city:"Dallas, TX",
        price:1100,
        active:"9 hours ago",
        perfect:false,
        female:false,
        color:'dark'},
        {name:"Emilia",
        city:"Dallas, TX",
        price:600,
        active:"1 hour ago",
        perfect:true,
        female:true,
        color:'light'},
        {name:"Laquisha",
        city:"Denton, TX",
        price:900,
        active:"3 hours ago",
        perfect:false,
        female:true,
        color:'dark'}
    ])
  return (
    <div className='pl-[10%] pr-[10%] w-fit flex '>
        {users.map((user,i)=>{
            return(<div className="flex rounded-sm shadow-md mr-6 hover:shadow-xl flex-col"><div key={i} className='topcard  relative'>
                <img className='h-[150px] w-[225px] object-cover ' src={user.female?user.color==='dark'?DarkGirl:LightGirl:user.color==="dark"?Black:Male} alt='photo'/>
                <img src={Star} alt="Star" className='absolute h-8 top-2 left-2 z-[2]' />
                {user.perfect?<img className= 'absolute z-[2] w-[106px] top-0 right-0' src={Perfect} alt='Perfect'/>:''}
                </div>
                <div className="flex flex-col p-5">
                  <span className='text-blue-500 font-bold leading-4'>${user.price} <span className='font-bold text-black'>Max Rent</span></span>
                  <p className='leading-4 font-normal'>{user.type} available in</p>
                  <p className='font-bold leading-4'>{user.city}</p>
                  <h1 className='text-3xl mt-3 mb-3 font-bold'>{user.name}</h1>
                  <span className='text-sm'>ACTIVE <span className='font-bold'>{user.active}</span></span>
                </div>
                </div>
        )})}
    </div>
  )
}

export default Hero