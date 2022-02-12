import React, {useState} from 'react'
import ctl from '@netlify/classnames-template-literals'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import downArrow from '../assets/down-arrow.svg'


const navStyle = ctl(`flex justify-between items-center px-4  lg:px-[100px] 2xl:px-[300px] sm:px-10 py-7 `)
const ulStyle = ctl(`text-teal1 md:flex gap-[23px] text-grotesk nav-ul font-semibold hidden `)
const hoverDotStyle = ctl(`text-5xl -mt-7 hover-dot text-transparent transition-all duration-500`)

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <nav className={navStyle}>
        <img src={logo} alt='rise logo' />

        <img src={menu} alt='hamburger menu' className='block  md:hidden cursor-pointer' onClick={()=> setMobileNavOpen(!mobileNavOpen)} role='presentation'  />
        <ul className={ulStyle}>
            <li>Home 
              <span className={hoverDotStyle}>.</span> 
            </li>

            <li > 
              <span className='flex'>Products <img src={downArrow} alt='arrow'/></span> 
              <span className={hoverDotStyle}>.</span> 
            </li>

            <li>Investment Club 
              <span className={hoverDotStyle}>.</span>
            </li>

            <li>Blog 
              <span className={hoverDotStyle}>.</span>
            </li>

            <li>About Us 
              <span className={hoverDotStyle}>.</span>
            </li>

            <li>FAQs 
              <span className={hoverDotStyle}>.</span>
            </li>
        </ul>

          {/* mobile nav */}
          <nav className={`h-screen top-0 w-full mobile-nav md:hidden absolute bg-white text-teal1 transition-all ease-in-out duration-500 z-10 ${mobileNavOpen ? 'right-0' :'right-[-700px]'} `}>
            <div className='flex justify-between px-14 py-10'>
              <img src={logo} alt='rise logo' />

              <span 
              onClick={()=> setMobileNavOpen(!mobileNavOpen)} role='presentation' 
              className=" text-[20px] font-bold cursor-pointer ">
                X
              </span>
            </div>
            

            <ul className="ml-14 text-base ">
              <li>Home </li>
              <li  className='flex'> Products <img src={downArrow} alt='arrow'/> </li>
              <li>Investment Club  </li>
              <li>Blog </li>
              <li>About Us </li>
              <li>FAQs </li>
            </ul>
          </nav>
    </nav>
  )
}

export default Navbar