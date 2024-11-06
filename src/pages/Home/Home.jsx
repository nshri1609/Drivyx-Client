import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'
import ProductFilter from '../../components/ProductFilter/ProductFilter'
import WhyChoose from '../../components/WhyChoose/WhyChoose'
import OurServices from '../../components/OurServices/OurServices'
import UserGrowth from '../../components/UserGrowth/UserGrowth'
import AboutUs from '../../components/AboutUs/AboutUs'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <Welcome/>
      </div>
      <div>
        <ProductFilter/>
      </div>
      <div>
        <WhyChoose/>
      </div>
      <div>
        <OurServices/>
      </div>
      <div>
        <UserGrowth/>
      </div>
      <div>
        <AboutUs/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home