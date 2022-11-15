import React, { useState } from 'react'
import Male from '../assets/paaa.png'
import Perfect from '../assets/perfect.png'

const Hero = (props) => {
    const [users,setUsers]=useState([
        {name:"Paul",
        city:"Cummings, CA",
        price:1700,
        active:"2 hours ago",
        perfect:true,
        female:false},
        // {name:"Paul",
        // city:"Cummings, CA",
        // price:1700,
        // active:"2 hours ago",
        // perfect:true,
        // female:false}
    ])
  return (
    <div className='pl-[10%] pr-[10%] w-fit'>
        {users.map((user,i)=>{
            return(<div key={i} className='topcard  relative'>
                <img className='h-[150px] w-[225px] object-cover ' src={Male} alt='male'/>
                {user.perfect?<img className= 'absolute z-[2] w-[106px] top-0 right-0' src={Perfect} alt='Perfect'/>:''}
                </div>
        )})}
    </div>
  )
}

export default Hero