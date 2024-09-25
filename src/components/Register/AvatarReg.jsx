import React from 'react'
import { Card } from '../common/Card'
import monkeyEmoji from '../../assets/images/monkey-emoji.png'
import avatar from '../../assets/images/monkey-avatar.png'

export const AvatarReg = ({clickHandler}) => {
  return (
        <Card
            imgTitle={monkeyEmoji}
            title={"Okay, Rakesh k!"} 
            content1={
            <div className='flex flex-col self-center gap-y-2 justify-center text-sm'>
                <p className='self-center text-[#C4C5C5]'>Here this photo</p>
                <div className='flex self-center  justify-center h-24 w-24 bg-[#0077FF] rounded-full'>
                    <img src={avatar} className='rounded-full' />
                </div>
                <a href='' className='text-[#0077FF] self-center '>Choose different photo</a>
            </div>
            }  
            btnText={'Next'}
            clickHandler={()=>clickHandler()}
        />
  )
}
