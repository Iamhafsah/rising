import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import logo from '../assets/black-logo.svg'
import LinkText from './LinkText'


const headingStyle = ctl(`mb-8 font-semibold`)
const footerItemWrap = ctl(`flex justify-around gap-[60px] lg:gap-[160px]   footer-items`)
const containerStyle = ctl(`flex flex-col md:flex-row 2xl:justify-between md:gap-[160px] 2xl:gap-0  pt-[130px] pb-[92px] sm:px-10 px-4 lg:px-[100px] 2xl:px-[300px] px-10`)

const Footer = () => {
  return (
    <footer className={containerStyle}>
        <div className={footerItemWrap}>
            <ul>
                <li className={headingStyle}><img src={logo} alt='logo'/></li>
                <li>About Us</li>
                <li>Careers</li>
                <li>FAQs</li>
                <li>Contact Info</li>
                <li>Press</li>
                <li>Rise Impact</li>
            </ul>

            <ul>
                <h3 className={headingStyle}>Explore</h3>
                <LinkText text='Investmet Club'/>
                <LinkText text='Blog' />
            </ul>
        </div>


        <div className={`mt-10 md:mt-0 ${footerItemWrap}`}>
            <ul>
                <h3 className={headingStyle}>Products</h3>
                <li>Rise App</li>
                <li>Wallets</li>
                <li>Asset Classes</li>
            </ul>

            <ul>
                <h3 className={headingStyle}>Contact Us</h3>
                <LinkText text='0818 714 7405'/>
                <LinkText text='hello@rise.capital' />
                <LinkText text='Newsletter' />
                <LinkText text='Newsletter' />
                <LinkText text='Twitter' />
            </ul>
        </div>
    </footer>
  )
}

export default Footer