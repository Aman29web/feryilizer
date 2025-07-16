import React from 'react'
import ServicesHero from './ServicesHero'
import ServicesGrid from './ServicesGrid'
import ServiceProcess from './ServiceProcess'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import ServicesCTA from './ServicesCTA'

const ServicesRouter = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ServicesHero></ServicesHero>
      <ServicesGrid></ServicesGrid>
      <ServiceProcess></ServiceProcess>
      <ServicesCTA></ServicesCTA>
      <Footer></Footer>
      
    </div>
  )
}

export default ServicesRouter
