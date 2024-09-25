import React, { useState } from 'react'
import { PhoneEmailReg } from '../components/Register/PhoneEmailReg'
import { OTPreg } from '../components/Register/OTPreg'
import { FullNameReg } from '../components/Register/FullNameReg'
import { AvatarReg } from '../components/Register/AvatarReg'
import { UserName } from '../components/Register/UserName'
import phoneIcon from '../assets/images/phone-white.png'
import emailIcon from '../assets/images/mail-white.png'

const Steps = {
    1:PhoneEmailReg,
    2:OTPreg,
    3:FullNameReg,
    4:AvatarReg,
    5:UserName
}

export const Register = () => {

    const [step, setStep] = useState(1)
    const [phone, setPhone] = useState(true)

    const Step = Steps[step]

    function nextHandler(){
        if(step!==5){
            setStep(step+1)
        }else{
            
        }
    }

  return (
    <div className='relative flex justify-center'>
         {/* Phone Icon && Email Icon */}
        {step===1 &&
            (
                <div className='absolute w-[37%] flex top-4 justify-end gap-x-2'>
                    <img src={phoneIcon} onClick={()=>setPhone(true)}
                        className={`h-10 w-10 p-2 hover:bg-blue-600 rounded-md cursor-pointer
                            ${phone? 'bg-blue-600' : 'bg-gray-900'}
                            `}
                    />
                    <img src={emailIcon} onClick={()=>setPhone(false)}
                        className={`h-10 w-10 p-2 py-2.5 hover:bg-blue-600 rounded-md cursor-pointer
                            ${phone? 'bg-gray-900' : 'bg-blue-600'}
                            `}
                    />
                </div>
            )
        }
        <Step clickHandler={nextHandler} phone={phone}/>
    </div>
  )
}
