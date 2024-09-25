import React from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='container py-5 flex '>
        {/* logo */}
        <NavLink to={'/'}>
          <div className='flex gap-x-2'>
              <img src={logo}
                className='h-7 self-center'
              />
              <span className='text-2xl font-bold'>Codershouse</span>
          </div>
        </NavLink>
        
    </div>
  )
}
