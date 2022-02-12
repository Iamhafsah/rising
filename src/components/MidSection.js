import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import Partners from './Partners'
import TextWithSideArrow from './TextWithSideArrow'
import investImg from '../assets/invest-woman.svg'
import chooseImg from '../assets/choose-woman.svg'
import setGoals from '../assets/set-goals.svg'
import remember from '../assets/remember.svg'

const containerStyle = ctl(`lg:px-[100px] 2xl:px-[300px] sm:px-10 px-4`)
const sectionWrapStyle = ctl(`flex md:flex-row justify-between items-center `)
const textDivStyle = ctl(`text-center md:text-left`)
const headingStyle = ctl(`text-[32px] font-semibold tracking-[-0.05em]  `)
const paragraphStyle = ctl(`text-rise-dark `)
const imgDivStyle = ctl(`relative flex flex-col items-center`)
const transparentBarStyle = ctl(`h-6 w-[80%] opacity-[.8] bg-teal3 absolute bottom-[70px] mx-auto block md:hidden `)


const MidSection = () => {
  return (
    <section className={containerStyle}>
        <Partners/>

            <section className={`${sectionWrapStyle} flex-col-reverse`}>
                <div className={textDivStyle}>
                    <h2 className={headingStyle}>Invest your money in dollars</h2>
                    <p className={`${paragraphStyle} md:w-[318px]`}>By holding your investments in a stable currency, your money grows more over time and retains its value better.</p>
                    
                    <div className='hidden md:block'>
                        <TextWithSideArrow text='Start Investing Now '/>
                    </div>
                </div>

                <div className={imgDivStyle}>
                    <img src={investImg} alt="choose" className='midsection-img' />
                    <div className={transparentBarStyle}></div>
                </div>
            </section>

            <section className={`${sectionWrapStyle} flex-col`}>
                <div className={imgDivStyle}>
                    <img src={chooseImg} alt="invest" className='midsection-img'/>
                    <div className={transparentBarStyle}></div>
                </div>

                <div className={textDivStyle}>
                    <h2 className={headingStyle}>Choose what's best for you</h2>
                    <p className={`${paragraphStyle} md:w-[432px]`}>Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. </p>
                    
                    <div className='hidden md:block'>
                        <TextWithSideArrow text='Start Investing Now '/>
                    </div>
                </div>
            </section>

            <section className={`${sectionWrapStyle} flex-col-reverse`}>
                <div className={textDivStyle}>
                    <h2 className={headingStyle}>Set goals and reach them</h2>
                    <p className={`${paragraphStyle} md:w-[432px]`}>You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. </p>
                    
                    <div className='hidden md:block'>
                        <TextWithSideArrow text='Start Investing Now '/>
                    </div>
                </div>

                <div className={imgDivStyle}>
                    <img src={setGoals} alt="set goals" className='midsection-img'/>                    
                    <div className={transparentBarStyle}></div>
                </div>
            </section>
           
            <section className={`${sectionWrapStyle} flex-col`}>
                <div className={imgDivStyle}>
                <img src={remember} alt="remember" className='midsection-img'/>
                    <div className={`${transparentBarStyle} bottom-[110px]`}></div>
                </div>

                <div className={textDivStyle}>
                    <h2 className={headingStyle}>We remember so you dont have to</h2>
                    <p className={`${paragraphStyle} md:w-[432px]`}>Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.  </p>
                   
                    <div className='hidden md:block'>
                        <TextWithSideArrow text='Start Investing Now '/>
                    </div>
                </div>
            </section>

           
    </section>
  )
}

export default MidSection