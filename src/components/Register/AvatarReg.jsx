import React from 'react'
import { Card } from '../common/Card'

export const AvatarReg = ({clickHandler}) => {
  return (
        <Card
            imgTitle={''}
            title={"Okay UserName!"} 
            content1={
            <div>
                <div>Here this photo</div>
                <p className='flex justify-center text-blue-800'>
                    <a href=''>Choose different photo</a>
                </p>
            </div>
            }  
            btnText={'Next'}
            clickHandler={()=>clickHandler()}
        />
  )
}
