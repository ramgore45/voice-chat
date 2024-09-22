import React from 'react'
import { Card } from '../components/common/Card'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate = useNavigate()

  function goToRegister(){
    navigate('/register')
  }

  return (
    <div className='flex justify-center content-center items-center'>
      <Card 
          imgTitle={''}
          title={"Welcome to Codershouse !"} 
          content1={
            <div className='flex text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia ullam asperiores nulla accusamus quod commodi fuga. Facere culpa rerum corrupti eveniet provident, deleniti suscipit, sint sapiente recusandae reiciendis repellat?</div>
          }
          content2={
              <p className='self-center text-blue-800'>
                  <span>Have an invite sent? </span>
                  <a className='underline underline-offset-2 font-semibold cursor-pointer' href='/login'>
                    SignIn
                  </a>
              </p>
          }   
          btnText={'Get your username'}
          clickHandler={()=>goToRegister()}
      />
    </div>
  )
}
