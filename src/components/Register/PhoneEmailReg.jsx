import React from 'react'
import { Card } from '../common/Card'
import phoneLogo from '../../assets/images/phone.png'
import emailEmoji from '../../assets/images/email-emoji.png'

export const PhoneEmailReg = ({clickHandler, phone}) => {
  return (
        <Card
            imgTitle={phone ? phoneLogo : emailEmoji }
            title={phone ? "Enter your phone number": "Enter your email"}
            content1={
            <div>
                {
                    phone ? "Phone Input" : "Email Input"
                }
            </div>
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
