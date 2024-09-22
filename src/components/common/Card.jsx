import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Btn } from './Btn'

export const Card = ({imgTitle, title, content1, content2, btnText, clickHandler}) => {
  return (
    <div className='w-[37%] mt-16 flex flex-col gap-y-4 justify-center px-16 p-10 bg-gray-900 rounded-md'>
        
            {/* Heading */}
            <div className='flex gap-x-2 justify-center'>
                <img src={imgTitle} 
                    className='h-6 self-center'
                />
                <p className='text-xl font-medium'>{title}</p>
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
