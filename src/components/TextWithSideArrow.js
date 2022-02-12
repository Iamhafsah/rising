import React from 'react'
import sideArrow from '../assets/side-arrow.svg'

const TextWithSideArrow = ({text}) => {
  return (
    <p className='flex text-teal1 mt-6 text-[18px] group items-center cursor-pointer font-medium transition-all duration-300'>{text}
        <img  src={sideArrow} alt='side arrow' className=' group-hover:opacity-[1] group-hover:translate-x-2 transition-all duration-300 opacity-0' />
    </p>
  )
}

export default TextWithSideArrow