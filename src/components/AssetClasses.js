import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import TextWithSideArrow from './TextWithSideArrow'
import stocks from '../assets/stocks.svg'
import realEstate from '../assets/real-estate.svg'
import fixedIncome from '../assets/fixed-income.svg'


const containerStyle = ctl(`lg:px-[100px] 2xl:px-[300px] sm:px-10 px-4 mt-20`)
const cardStyles = ctl(`rounded-[5px] border-[2px] md:w-[320px] shadow-md text-center pb-4`)
const headingStyle = ctl(`mb-2 text-center text-[40px] font-black`)
const topColorStyle = ctl(`h-[127px] w-full] `)
const circleStyle = ctl(`bg-white px-[14px] w-[100px] flex h-[100px] rounded-full -mt-12  `)
const titleStyle = ctl(`text-[24px] font-medium py-4`)
const paragraphStyle = ctl(`mb-10 text-rise-dark lg:h-[150px] md:h-[180px]`)



const AssetClasses = () => {
  return (
    <section className={containerStyle}>
        <h1 className={headingStyle}>Asset Classes</h1>
        <p className='mb-[42px] text-center'>It&apos;s your money, choose where you invest it</p>

        <ul className='flex gap-4 justify-center flex-col md:flex-row items-center '>
            <li className={cardStyles}>
                <div className={`${topColorStyle} bg-rise-orange`} ></div>

                <div className='flex flex-col items-center px-4 '>
                    <div className={circleStyle}>
                        <img src={stocks} alt='stocks' />
                    </div>
                    <h2 className={titleStyle}>Stocks</h2>

                    <p className={paragraphStyle}>We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.</p>

                    <p className='text-[#919FB5]'>Historical Returns: <span className='text-rise-dark'>14% per annum</span>  </p>
                    <p className='text-[#919FB5] '>Risk Level: <span className='text-rise-dark'>Medium</span>  </p>

                    <TextWithSideArrow text='Learn how Stocks work'/>
                </div>
            </li>

            <li className={cardStyles}>
                <div className={`${topColorStyle} bg-rise-indigo`} ></div>

                <div className='flex flex-col items-center  px-4'>
                    <div className={circleStyle}>
                        <img src={realEstate} alt='real estate' />
                    </div>
                    <h2 className={titleStyle}>Real Estate</h2>

                    <p className={paragraphStyle}>Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.</p>

                    <p className='text-[#919FB5]'>Historical Returns: <span className='text-rise-dark'>14% per annum</span>  </p>
                    <p className='text-[#919FB5]'>Risk Level: <span className='text-rise-dark'>Medium</span>  </p>

                    <TextWithSideArrow text='Learn how Stocks work'/>
                </div>
            </li>

            <li className={cardStyles}>
                <div className={`${topColorStyle} bg-teal4`} ></div>

                <div className='flex flex-col items-center px-4 '>
                    <div className={circleStyle}>
                        <img src={fixedIncome} alt='fixed income' />
                    </div>
                    <h2 className={titleStyle}>Fixed Income</h2>

                    <p className={paragraphStyle}>A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.</p>

                    <p className='text-[#919FB5]'>Historical Returns: <span className='text-rise-dark'>14% per annum</span>  </p>
                    <p className='text-[#919FB5] '>Risk Level: <span className='text-rise-dark'>Medium</span>  </p>

                    <TextWithSideArrow text='Learn how Stocks work'/>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default AssetClasses