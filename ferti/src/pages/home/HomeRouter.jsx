import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import HeroSection from './HeroSection'
import HeroSection2 from './HerSection2'
import Hero3 from './Hero3'
import Hero4 from './Hero4'
import StatisticsSection from './StatisticsSection'
import ProductSolutions from './ProductSolutions'
import SustainabilitySection from './SustainabilitySection'
import NewsSection from './NewsSection'
import TestimonialsSection from './TestimonialsSection'
import ImpactStats from './ImpactStats'
import CTASection from './CTASection'
import Footer from '../../component/footer/Footer'
import HomeServices from './HomeServices'
import HomeServiceCards from './HomeServiceCards'
import FertilizerResultCarousel from './FertilizerResultCarousel'
import TestimonialSlider from './TestimonialSlider'
import Services3 from './Services3'
import InnovationSection from './InnovationSection'
import InnovationBlock from './InnovationBlock'
import FertilizerInfo from './FertilizerInfo'

const HomeRouter = () => {
  return (
    <div>
      <Navbar/>
      <Hero4></Hero4>
      <StatisticsSection></StatisticsSection>
      <Services3></Services3>
      {/* <InnovationSection></InnovationSection> */}
      <InnovationBlock></InnovationBlock>
      <ProductSolutions></ProductSolutions>
      <FertilizerInfo></FertilizerInfo>

      <HomeServiceCards></HomeServiceCards>
      {/* <CTASection></CTASection> */}
     <SustainabilitySection></SustainabilitySection>
      <NewsSection></NewsSection>
      <ImpactStats></ImpactStats>
      {/* <FertilizerResultCarousel></FertilizerResultCarousel> */}
      {/* <TestimonialSlider></TestimonialSlider> */}
      <TestimonialsSection></TestimonialsSection>
      {/* <TestimonialSlider></TestimonialSlider> */}

      <Footer></Footer>
      {/* <HomeServices></HomeServices> */}
      {/* <Hero3></Hero3> */}
      {/* <HeroSection2></HeroSection2> */}
      {/* <HeroSection></HeroSection> */}
    </div>
  )
}

export default HomeRouter
