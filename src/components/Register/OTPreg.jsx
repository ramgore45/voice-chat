import React from 'react'
import { Card } from '../common/Card'

export const OTPreg = ({clickHandler}) => {
  return (
        <Card
            imgTitle={''}
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
