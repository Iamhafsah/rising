import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import appStore from '../assets/app-store.svg'
import playStore from '../assets/play-store.svg'
import phone from '../assets/bottom-phone.svg'
import mobileScreen from '../assets/mobile-down-phone.svg'

const pageWrapStyle = ctl(`flex flex-col md:flex-row items-center pt-[35px] sm:px-10 px-4 justify-between mx-4 sm:mx-10 lg:mx-[100px] 2xl:mx-[300px]  bg-teal4 rounded-[50px]`)

const headingStyle = ctl(` md:text-[32px] text-[20px] font-medium tracking-[-0.05em] 2xl:tracking-[-0.03em] leading-tight 2xl:font-extrabold font-bold text-center md:text-left text-rise-black my-4`)

const paragraphStyle = ctl(`text-rise-dark leading-[24px] mb-8 max-w-[391px]  `)

const downloadWrapStyle = ctl(`flex gap-4  `)

const screenWrapStyle = ctl(` mt-10 md:mt-0`)

const screenStyle= ctl(`hidden md:block`)


const DownloadRise = () => {
  return (
    <section className={pageWrapStyle}>
        <div className='md:block flex flex-col items-center'>
            <p className='text-teal1'>Download The Rise App</p>

            <h1 className={headingStyle}>Join our 100,000 users investing  <br /> and setting long term goals!  </h1>

            <p className={paragraphStyle}>Dollar investments that help you grow.</p>

            <div className={downloadWrapStyle}>
                <img src={appStore} alt='download from app store' />
                <img src={playStore} alt='download from google play store'  />
            </div>
        </div>

        <div className={screenWrapStyle}>
            <img src={phone} alt='mobile screen' className={screenStyle} />
            <img src={mobileScreen} alt='mobile screen' className='block md:hidden' />
        </div>
    </section>
  )
}

export default DownloadRise