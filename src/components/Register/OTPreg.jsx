import React, { useState } from 'react'
import { Card } from '../common/Card'
import lockEmoji from '../../assets/images/lock-emoji.png'
import OTPInput from 'react-otp-input'

export const OTPreg = ({clickHandler}) => {

    const [otp, setOtp] = useState('')

  return (
        <Card
            imgTitle={lockEmoji}
            title={"Enter the code just we have texted you"} 
            content1={
            <div className='flex flex-col gap-y-2 justify-center'>

                <div className='self-center'>
                    <OTPInput
                        placeholder='2'
                        value={otp}
                        onChange={(e)=>setOtp(e.target.event)}
                        numInputs={4}
                        inputType={'tel'}
                        shouldAutoFocus={true}
                        renderInput={(props) => <input {...props} />}
                        containerStyle={{gap:'10px'}}
                        inputStyle={{borderRadius:'5px', height:'40px', width:'30px', background: '#262626', outline:'none'}}
                    />
                </div>
                <p className='self-center text-sm text-[#C4C5C5]'>
                    <span>Didn't receive? Tap to</span>{" "}<a>resend</a>
                </p>
            </div>
            }  
            btnText={'Next'}
            clickHandler={()=>clickHandler()}
        />
  )
}
