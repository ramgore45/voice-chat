import React, { useState } from 'react'
import { PhoneEmailReg } from '../components/Register/PhoneEmailReg'
import { OTPreg } from '../components/Register/OTPreg'

const Steps = {
    1:PhoneEmailReg,
    2:OTPreg,
}

export const Login = () => {
    
    const [step, setStep] = useState(1)

    const Step = Steps[step]

    function nextHandler(){
        if(step!==2){
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
