import React from 'react'
import { Card } from '../common/Card'

export const UserName = ({clickHandler}) => {
  return (
        <Card
            imgTitle={''}
            title={"Pick your username!"} 
            content1={
            <div>
                <div>input text user name</div>
                <p className='flex justify-center text-gray-500'>
                    Username can be use for the login
                </p>
            </div>
            } 
            btnText={'Next'}
            clickHandler={()=>clickHandler()}
        />
  )
}
