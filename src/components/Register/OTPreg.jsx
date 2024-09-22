import React from 'react'
import { Card } from '../common/Card'
import lockEmoji from '../../assets/images/lock-emoji.png'

export const OTPreg = ({clickHandler}) => {
  return (
        <Card
            imgTitle={lockEmoji}
            title={"Enter the code just we have texted you"} 
            content1={
            <div>
                <div>OTP</div>
                <p className=' text-gray-500'>
                    <span>Didn't receive? Tap to </span>{" "}<a href=''>resend</a>
                </p>
            </div>
            }  
            btnText={'Next'}
            clickHandler={()=>clickHandler()}
        />
  )
}
