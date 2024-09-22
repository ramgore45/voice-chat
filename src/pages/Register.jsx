import React, { useState } from 'react'
import { PhoneEmailReg } from '../components/Register/PhoneEmailReg'
import { OTPreg } from '../components/Register/OTPreg'
import { FullNameReg } from '../components/Register/FullNameReg'
import { AvatarReg } from '../components/Register/AvatarReg'
import { UserName } from '../components/Register/UserName'

const Steps = {
    1:PhoneEmailReg,
    2:OTPreg,
    3:FullNameReg,
    4:AvatarReg,
    5:UserName
}

export const Register = () => {

    const [step, setStep] = useState(1)

    const Step = Steps[step]

    function nextHandler(){
        if(step!==5){
            setStep(step+1)
        }else{
            
        }
    }

  return (
    <div className='flex justify-center content-center items-center'>
        <Step clickHandler={nextHandler}/>
    </div>
  )
}
