import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Btn } from './Btn'

export const Card = ({imgTitle, title, content1, content2, btnText, clickHandler}) => {
  return (
    <div className='w-[37%] mt-16 flex flex-col gap-y-4 justify-center px-14 p-12 bg-[#1D1D1D] rounded-md'>
        
            {/* Heading */}
            <div className='flex gap-x-2 justify-center'>
                <img src={imgTitle} 
                    className='h-5 self-center'
                />
                <p className='text-lg text-center font-medium'>{title}</p>
            </div>

            {/* content */}
            <div className='flex justify-center self-center content-center mt-2'>
                {content1}
            </div>

            {/* button */}
            <div className='self-center'>
                <Btn btnText={btnText} clickHandler={clickHandler}/>
            </div>
            
            {/* sub-links/sub-contents */}
            {content2}
            
        </div>
  )
}
