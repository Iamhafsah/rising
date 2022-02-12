import React from 'react'
import linkArrow from '../assets/link-arrow.svg'

const LinkText = ({text}) => {
  return (
    <li className='group cursor-pointer text-rise-black flex gap-2'>{text} <img src={linkArrow} alt='arrow' className='group-hover:-translate-y-2 transition-all duration-300 ' /> </li>
  )
}

export default LinkText