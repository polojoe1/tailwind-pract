import React from 'react'

const Filters = (props) => {
  return (
    <div className='flex justify-between'>
        <div className="left h-8 w-[120px]  flex items-center justify-center border-[0.5px] rounded-full border-black">
            <span className='font-bold'>54 <span className='font-light'> matches! 🙌</span></span>
            
        </div>
        <div className="right flex justify-between">
            <div className="one">
                <span>Sort: </span>
                <select name="" id="">
                    <option value="">Newest first</option>
                </select>
            </div>
            <div className="two">
                <span>Show:</span>
                <select name="" id="">
                    <option value="">All Matches </option>
                </select>

            </div>
            <div className="firstButton h-8 w-8 flex flex-col justify-center items-center bg-blue-300">
                <div className="top flex">
                    <div className='bg-white h-2 w-2 mr-1 mb-1'></div>
                    <div className='bg-white h-2 w-2 mb-1'></div>
                </div>
                <div className="bottom flex">
                    <div className='bg-white h-2 w-2  mr-1'></div>
                    <div className='bg-white h-2 w-2  '></div>
                </div>
            </div>
            <div className="secondButton h-8 w-8 flex flex-col justify-around pt-2 pb-2  items-center bg-blue-700">
                <div className="bar h-[2px] w-4 bg-white"></div>
                <div className="bar h-[2px] w-4 bg-white"></div>
                <div className="bar h-[2px] w-4 bg-white"></div>
                
            </div>
        </div>
    </div>
  )
}

export default Filters