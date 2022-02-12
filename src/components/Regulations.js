import React from 'react'
import ctl from '@netlify/classnames-template-literals'

const colors = ctl(`mix-blend-multiply blur-xl h-[50%] w-[15vw] lg:w-[25vw] `)

const Regulations = () => {
  return (
    <section className='h-[372px] md:h-[60vh] mb-[90px] flex justify-between'>
        <div>
            <div className={`bg-[#FFF4F0] ${colors} `}></div>
            <div className={`bg-[#F6E4F0] ${colors} `}></div>
        </div>

        <div className='bgwhite flex flex-col justify-center items-center'>
            <h1 className='lg:text-[40px] text-[32px] font-semibold text-center md:text-left leading-none mb-4 sm:mb-0 '>How we are Regulated</h1>
            <p className='text-center md:w-[490px] leading-[24px] '>Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions</p>
        </div>

        <div>
            <div className={`bg-[#F6E4F0]  ${colors} `}></div>
            <div className={`bg-[#ECFEFE] ${colors} `}></div>
        </div>
    </section>
  )
}

export default Regulations