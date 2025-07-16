import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'
import ContactCTA from './ContactCTA'
import ContactInfo from './ContactInfo'
import ContactFAQ from './ContactFAQ'

const Contactrouter = () => {
  return (
    <div>
        <Navbar></Navbar>
        <ContactHero></ContactHero>
        <ContactInfo></ContactInfo>
        <ContactForm></ContactForm>
        <ContactCTA></ContactCTA>
        <ContactFAQ></ContactFAQ>
        <Footer></Footer>
      
    </div>
  )
}

export default Contactrouter
