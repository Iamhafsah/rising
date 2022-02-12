import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import arm from '../assets/arm.svg'
import western from '../assets/western.svg'
import techstars from '../assets/techstars.svg'
import ventures from '../assets/ventures.svg'

const partnersWrap = ctl(`flex 2xl:gap-12 md:gap-6 items-center justify-center partners sm:mb-[85px] mb-[40px]  `)

const Partners = () => {
  return (
    <>
        <p className='sm:hidden text-[#7B8DA8] text-[18px] mt-10 text-center '>We are supported by</p>
        <div className={partnersWrap}>
            <img src={arm} className='arm' alt="arm logo"/>
            <img src={western} className='western' alt="western logo"/>
            <img src={techstars} alt="techstars logo"/>
            <img src={ventures} alt="ventures logo"/>
        </div>
    </>
  )
}

export default Partners