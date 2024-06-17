import React from 'react'
import Logo from '../assets/images/logo-2.webp'
import Slider2 from '../assets/images/bg-slider2.jpg'
import ServiceSection from '../components/ServiceSection'
import ClientsSection from '../components/ClientSection'
import FeaturesSection from '../components/FeaturesSection'
import FaqsSection from '../components/FaqsSection'
import TestimonialSection from '../components/TestimonialSection'
import TeamSection from '../components/TeamSection'
import NewsSection from '../components/NewsSection'
import ContractSection from '../components/ContractSection'
import MapSection from '../components/MapSection'
import Header from '../components/Header'
import MainSlider from '../components/MainSlider'
import Preloader from '../components/Preloader'
import AboutSection from '../components/AboutSection'
import ServicesSection4 from '../components/ServicesSection4'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
const Home1 = () => {
  return (
    <>
  <div className="page-wrapper">
    <Preloader/>
    <Header/>
    <MainSlider/>
   
   
  <ServiceSection/>

 <AboutSection/>
   <ServicesSection4/>
     <ClientsSection/>
     <FeaturesSection/>
     <FaqsSection/>
     <TestimonialSection/>
     <TeamSection/>
     <NewsSection/>
   
   <ContractSection/>
    <MapSection/>
    <Footer/>
  </div>
  <ScrollToTop/>
</>

  )
}

export default Home1
