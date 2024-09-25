import React, { useState } from 'react'
import { Card } from '../common/Card'
import phoneLogo from '../../assets/images/phone.png'
import emailEmoji from '../../assets/images/email-emoji.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Inputfield } from '../common/Inputfield'

export const PhoneEmailReg = ({clickHandler, phone}) => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')

  return (
        <Card
            imgTitle={phone ? phoneLogo : emailEmoji }
            title={phone ? "Enter your phone number": "Enter your email"}
            content1={
                <div >
                    {
                        phone ? (
                            <PhoneInput
                                value={phoneNumber}
                                onChange={(e)=>setPhoneNumber(e.target.value)}
                                country='in'
                                disableDropdown={true}
                                containerStyle={{width:'240px', background: 'transparent', outline:'none', gap:'none'}}
                                searchStyle={{ background: '#262626', outline:'none',border:'none', borderRadius:'6px'}}
                                dropdownStyle={{ background: '#262626', outline:'none',border:'none', borderRadius:'6px'}}
                                buttonStyle={{ background: '#262626', outline:'none',border:'none', borderRadius:'6px', padding:'none'}}
                                inputStyle={{width:'240px',  background: '#262626', outline:'none',border:'none', borderRadius:'6px'}}
                                inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                                }}
                            />
                        ) : (
                            <Inputfield name={'email'} type={'email'} placeholder={'example@gmail.com'}
                                value={email} onChange={(e)=>setEmail(e.target.value)}
                            />
                        )
                    }
                </div>
            } 
            content2={
                <p className='text-center text-sm self-center w-[80%] text-[#C4C5C5]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et?
                </p>
            } 
            btnText={'Next'}
            clickHandler={()=>clickHandler()}
        />
  )
}
