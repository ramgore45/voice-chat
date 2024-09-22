import React from 'react'
import { Card } from '../common/Card'

export const FullNameReg = ({clickHandler}) => {
  return (
        <Card 
            imgTitle={''}
            title={"What's your full name?"} 
            content1={
            <div>
                <div>USer Name</div>
                <p className='text-center w-[80%] text-gray-500'>
                    Peoples use real names at codershouse
                </p>
            </div>
            }  
            btnText={'Next'}
            clickHandler={()=>clickHandler()}
        />
  )
}
