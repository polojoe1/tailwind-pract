import React from 'react'
import Map from '../assets/map.png'
const Filters = (props) => {
  return (
    <div className='flex justify-between w-full pr-[10%] pl-[10%] mt-8'>
        <div className="left h-8 w-[130px]  flex items-center justify-center border-[0.5px] rounded-full border-black">
            <span className='font-bold'>54 <span className='font-light'> matches! 🙌</span></span>
            
        </div>
        <div className="right flex ">
            <div className="one mr-2">
                <span>Sort: </span>
                <select className=' h-8 rounded-xs  shadow-[0_2px_6px_0_rgba(0,0,0,0.3)]' name="" id="">
                    <option  value="">Newest first</option>
                </select>
            </div>
            <div className="two mr-2">
                <span className='mr-1'>Show:</span>
                <select className=' h-8 rounded-xs shadow-xl mr-2' name="" id="">
                    <option value="">All Matches </option>
                </select>

            </div>
            <div className="firstButton h-8 w-8 flex flex-col justify-center items-center bg-blue-300  mr-2">
                <div className="top flex">
                    <div className='bg-white h-2 w-2 mr-[1px] rounded-sm mb-[1px]'></div>
                    <div className='bg-white h-2 w-2 rounded-sm'></div>
                </div>
                <div className="bottom flex">
                    <div className='bg-white h-2 w-2 rounded-sm  mr-[1px]'></div>
                    <div className='bg-white h-2 w-2 rounded-sm  '></div>
                </div>
            </div>
            <div className="secondButton h-8 w-8 flex flex-col justify-around pt-2 pb-2  items-center mr-2 bg-blue-700">
                <div className="bar h-[2px] w-4 bg-white"></div>
                <div className="bar h-[2px] w-4 bg-white"></div>
                <div className="bar h-[2px] w-4 bg-white"></div>
                
            </div>
            <div className="thirdButton flex h-8 w-8 bg-slate-600 justify-center mr-2 items-center">
                <img className='h-4 w-4' src={Map} alt="map" />
            </div>
        </div>
    </div>
  )
}

export default Filters