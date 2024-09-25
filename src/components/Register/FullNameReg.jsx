import React, { useState } from 'react'
import { Card } from '../common/Card'
import goggleLogo from '../../assets/images/goggle-emoji.png'
import { Inputfield } from '../common/Inputfield'

export const FullNameReg = ({clickHandler}) => {

    const [fullName,setFullname] = useState('')

  return (
        <Card 
            imgTitle={goggleLogo}
            title={"What's your full name?"} 
            content1={
                <Inputfield name={'fullName'} type={'text'} placeholder={'John Doey'} 
                    subText={'Peoples use real names at codershouse'}
                    value={fullName}
                    onChange={(e)=>setFullname(e.event.target)}
                />
            }  
            btnText={'Next'}
            clickHandler={()=>clickHandler()}
        />
  )
}
