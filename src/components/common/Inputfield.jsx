import React from 'react'

export const Inputfield = ({name, type, placeholder, subText}) => {
  return (
    <div className='flex flex-col gap-y-2 justify-center'>
        <div className='self-center'>
            <input className='outline-none w-60 rounded-md bg-[#262626] py-2 px-3 text-sm placeholder:text-gray-600'
                required
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
        <p className='flex text-sm justify-center text-[#C4C5C5]'>
            {subText}
        </p>
    </div>
    
  )
}
