import React from 'react'
import AboutHero from './AboutHero'
import OurStorySection from './OurStorySection'
import MissionVisionSection from './MissionVisionSection'
import TeamSection from './TeamSection'
import OurPartners from './OurPartners'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'

const AboutRouter = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AboutHero></AboutHero>
      <OurStorySection></OurStorySection>
      {/* <OurStorySection></OurStorySection> */}
      <MissionVisionSection></MissionVisionSection>
      <TeamSection></TeamSection>
      <OurPartners></OurPartners>
      <Footer></Footer>
      
    </div>
  )
}

export default AboutRouter
