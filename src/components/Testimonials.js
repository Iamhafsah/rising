import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import babajide from '../assets/babajide.png'
import jesse from '../assets/jesse.png'
import lade from '../assets/lade.png'

const cardStyle = ctl(`w-[409px] lg:w-[350px] 2xl:w-[409px] rounded-[10px] shadow-md p-6`)
const imageWrap = ctl(`flex items-center gap-4 pt-4`)
const paragraphStyle = ctl(`h-[200px]`)

const Testimonials = () => {
  return (
   <section className='mb-[100px]  '>
       <h1 className='md:text-[40px]  text-[32px] font-semibold leading-none text-teal2 text-center '>From The People Who Use Rise</h1>
       <p className='text-center text-[18px] md:w-[502px] mx-auto mb-10 '>Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.</p>

       <div className='overflow-auto py-4 testiomonials-wrap'>
       <ul className='flex justify-center gap-6 w-[300%] md:w-[150%] lg:w-[130%] lg:w-auto '>
           <li className={cardStyle}>
               <p className={paragraphStyle}>Like everyone, I want to be protected from currency fluctuations and Rise helps me with that. The fixed income and real estate asset classes are my preferred things about Rise. I 💚 seeing how my returns perform on a daily basis. It demonstrates safety and also puts me at a lower risk of losing money!</p>

               <div className={imageWrap}>
                   <img src={babajide} alt='babjide' />
                   <span>Babajide</span>
               </div>
           </li>

           <li className={cardStyle}>
               <p className={paragraphStyle}>I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.</p>

               <div className={imageWrap}>
                   <img src={jesse} alt='jesse' className='rounded-full' />
                   <span>Jesse</span>
               </div>
           </li>

           <li className={cardStyle}>
               <p className={paragraphStyle}>I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.</p>

               <div className={imageWrap}>
                   <img src={lade} alt='lade' />
                   <span>Lade</span>
               </div>
           </li>
       </ul>
       </div>
   </section>
  )
}

export default Testimonials