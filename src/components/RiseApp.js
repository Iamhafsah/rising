import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import phone from '../assets/middle-phone.png'

const sectionWrapStyle = ctl(` py-[100px] flex lg:gap-[160px] flex-col md:flex-row justify-center items-center gap-20 `)
const textWrapStyle = ctl(`max-w-[390px] text-center md:text-left`)
const titleStyle = ctl(`text-[40px] font-semibold mb-2 leading-none`)
const buttonStyle = ctl(`bg-teal1 text-white py-3 px-8 mt-8 rounded-[5px] font-bold`)

const RiseApp = () => {
  return (
    <section className={sectionWrapStyle}>
        <img src={phone} alt='screen showing the rise app' className='lg:w-[400px] w-[350px] '/>

        <div className={textWrapStyle}>
            <h2 className='text-[18px] mb-4 sm:mb-0'>The Rise App</h2>
            <p className={titleStyle} >Save for your <span className='text-[#8C5FF8]'>future</span> </p>
            <p>With Rise, you achieve your financial goals faster. <br/> Save for school, your home, vacations, your <br/> children&apos;s  future and more.</p>

            <button className={buttonStyle} type='button'>Start Saving</button>
        </div>
    </section>
  )
}

export default RiseApp