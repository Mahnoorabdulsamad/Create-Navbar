import React from 'react'
import Header from './Component/Component/header/Header'
import Hero from './Component/Hero/Hero'
import Footer from './Component/Footer/Footer'


const HomePage = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
  <Header />
  <Hero/>
  <Footer/>

       </div>
  )
}

export default HomePage
