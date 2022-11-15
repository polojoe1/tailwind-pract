import React from 'react'
import Map from '../assets/map.png'
const Filters = (props) => {
  return (
    <div className='flex xs:flex-col md:flex-row md:justify-between w-full pr-[10%] pl-[10%] mt-8'>
        <div className="left h-8 sm:w-full xs:mb-4  sm:pl-3 sm:pt-1 md:w-[130px]  md:flex items-center justify-center border-[0.5px] rounded-full border-black">
            <span className='font-bold'>54 <span className='font-light'> matches! 🙌</span></span>
            
        </div>
        <div className="right mb-4 flex ">
            <div className="one mr-2">
                <span className='hidden md:inline'>Sort: </span>
                <select className='xs:w-[32vw] md:w-[110px] h-8 rounded-xs  hover:cursor-pointer hover:shadow-[#00a2db]  shadow-[0_2px_6px_0_rgba(0,0,0,0.3)] mr-3' name="" id="">
                    <option  value="">Newest first</option>
                </select>
            </div>
            <div className="two mr-2">
                <span className='hidden md:inline mr-1 '>Show:</span>
                <select className='xs:w-[32vw] md:w-[110px] h-8 rounded-xs hover:shadow-[#00a2db] shadow-[0_2px_6px_0_rgba(0,0,0,0.3)] mr-2' name="" id="">
                    <option value="">All Matches </option>
                </select>

            </div>
            <div className="firstButton h-8 w-8 rounded-sm flex flex-col justify-center items-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] bg-[#299fd6]  mr-2">
                <div className="top flex">
                    <div className='bg-white h-2 w-2 mr-[1px] rounded-sm mb-[1px]'></div>
                    <div className='bg-white h-2 w-2 rounded-sm'></div>
                </div>
                <div className="bottom flex">
                    <div className='bg-white h-2 w-2 rounded-sm  mr-[1px]'></div>
                    <div className='bg-white h-2 w-2 rounded-sm  '></div>
                </div>
            </div>
            <div className="secondButton rounded-sm h-8 w-8 flex flex-col justify-around pt-2 pb-2  items-center mr-2 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                <div className="bar h-[2px] w-4 bg-black"></div>
                <div className="bar h-[2px] w-4 bg-black"></div>
                <div className="bar h-[2px] w-4 bg-black"></div>
                
            </div>
            <div className="hidden md:flex thirdButton rounded-sm h-8 w-8 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.3)] justify-center mr-2 items-center">
                <img className='h-4 w-4' src={Map} alt="map" />
            </div>
        </div>
    </div>
  )
}

export default Filters