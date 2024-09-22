import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export const Btn = ({btnText, clickHandler}) => {
  return (
    <button 
        onClick={clickHandler}
        className='flex justify-center font-semibold gap-x-2 min-w-36 max-w-fit px-4 p-2 rounded-full bg-blue-600
            hover:bg-blue-800 transition-all duration-300 ease-in-out
        '
    >
        <span>{btnText}</span> <FaArrowRight className='text-sm font-light self-center'/>
    </button>
  )
}
