import React from 'react'
import sideArrow from '../assets/side-arrow.svg'

const TextWithSideArrow = ({text}) => {
  return (
    <p className='flex gap-4 text-teal1 mt-6 text-[18px] group items-center cursor-pointer  '>{text}
        <img  src={sideArrow} alt='side arrow' className='group-hover:translate-x-4 transition-all duration-300 ' />
    </p>
  )
}

export default TextWithSideArrow