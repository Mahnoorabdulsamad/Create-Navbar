import React from 'react'
import Style from "../header/Hero.module.css"
import Link from 'next/link'

const Header = () => {
  return (
    
      <div className={Style.box}>
        
        <nav className='pt-6  text-2xl justify-between flex'>
          <div>Navbar</div>

        <ul className='gap-5 flex  '>
          <li>
            <Link href="/home"  className='underline  hover:bg-sky-700'>Home</Link>
          </li>
          <li>
            <Link href="/about" className='underline hover:bg-sky-700'>About</Link>
          </li>
          <li>
            <Link href="/contactus" className='underline  hover:bg-sky-700'>ContactUs</Link>
          </li>
        </ul>
        </nav>
      </div>
    
  )
}

export default Header
