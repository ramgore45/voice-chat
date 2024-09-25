import React, { useState } from 'react'
import { Card } from '../common/Card'
import goggleEmoji from '../../assets/images/goggle-emoji.png'
import { Inputfield } from '../common/Inputfield'

export const UserName = ({clickHandler}) => {

    const [userName, setUsername] = useState('')

  return (
        <Card
            imgTitle={goggleEmoji}
            title={"Pick your username!"} 
            content1={
                <Inputfield name={'userName'} type={'text'} placeholder={'@john_51'} 
                    subText={'Username can be use for the login'}
                    value={userName} onChange={(e)=> setUsername(e.target.value)}
                /> 
            } 
            btnText={'Next'}
            clickHandler={()=>clickHandler()}
        />
  )
}
