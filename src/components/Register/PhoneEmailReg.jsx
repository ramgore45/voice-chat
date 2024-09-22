import React from 'react'
import { Card } from '../common/Card'

export const PhoneEmailReg = ({clickHandler}) => {
  return (
        <Card
            imgTitle={""}
            title={"Enter your phone number"}
            content1={
            <div>Phone Number</div>
            } 
            content2={
                <p className='text-center self-center w-[80%] text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et?
                </p>
            } 
            btnText={'Next'}
            clickHandler={()=>clickHandler()}
        />
  )
}
