import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import community from '../assets/community.svg'

const sectionWrapStyle = ctl(` py-[100px] flex lg:gap-[160px] flex-col-reverse md:flex-row justify-center items-center gap-20 sm:px-10 px-4  lg:px-[100px] 2xl:px-[300px] `)
const textWrapStyle = ctl(` text-center md:text-left`)
const titleStyle = ctl(`text-[40px] font-semibold mb-2 leading-none `)
const buttonStyle = ctl(`bg-teal3 text-rise-black py-3 px-8 mt-8 rounded-[5px] font-bold`)

const Community = () => {
  return (
    <section className={sectionWrapStyle}>
        <div className={textWrapStyle}>
            <p className={titleStyle} >Join The Rise <br className='block md:hidden'/> Community</p>
            <p className='lg:max-w-[478px] w-full'>If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.</p>

            <button className={buttonStyle} type='button'>Join our Community</button>
        </div>

        <img src={community} alt='screen showing the rise app' className='lg:w-[400px] w-[320px] '/>
    </section>
  )
}

export default Community