import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import appStore from '../assets/app-store.svg'
import playStore from '../assets/play-store.svg'
import phone from '../assets/phone.svg'

const pageWrapStyle = ctl(`flex flex-col md:flex-row items-center justify-between sm:px-10 px-4 lg:px-[100px] 2xl:px-[300px] md:h-[90vh]  `)

const heroTextWrapStyle = ctl(` max-w-[470px] 2xl:max-w-[556px] md:mt-[-180px] mt-10 md:block flex flex-col justify-center items-center `)

const headingStyle = ctl(`md:text-[56px] text-[40px] text-teal1 font-medium tracking-[-0.05em] 2xl:tracking-[-0.03em] md:leading-[60px] leading-[40px] 2xl:font-extrabold font-bold text-center md:text-left `)

const paragraphStyle = ctl(`text-rise-dark leading-[24px] mt-6 mb-8 max-w-[391px]  `)

const downloadWrapStyle = ctl(`flex gap-4  `)

const screenWrapStyle = ctl(`animate-moving-screen mt-10 md:mt-0`)

const screenStyle= ctl(`lg:scale-[1.3] lg:scale-x-[1.4] md:scale-y-[1.2] md:scale-x-[1.3]`)


const Header = () => {
  return (
    <>
    <section className={pageWrapStyle}>
        <div className={heroTextWrapStyle}>
            <h1 className={headingStyle}>Dollar investments <br/> that  help you grow 
            <sup className='text-teal2 ml-1 '>.</sup> </h1>
            <p className={paragraphStyle}>We put your money in high quality assets that help you build wealth and achieve your financial goals.</p>

            <div className={downloadWrapStyle}>
                <img src={appStore} alt='download from app store' />
                <img src={playStore} alt='download from google play store'  />
            </div>
        </div>

        <div className={screenWrapStyle}>
            <img src={phone} alt='mobile screen' className={screenStyle} />
        </div>
    </section>

    <div className='floating'>
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  </>
  )
}

export default Header