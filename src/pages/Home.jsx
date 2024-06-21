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
import ServicesSection4 from '../components/ServicesSection4'
import ScrollToTop from '../components/ScrollToTop'
import Footer from '../components/Footer'
import AboutSection2 from '../components/AboutSection2'
import FeaturesSection2 from '../components/FeaturesSection2'
const Home1 = () => {
  return (
    <>
  <div className="page-wrapper">
    <Preloader/>
    <Header/>
    <MainSlider/>
   
  <FeaturesSection2/>
  {/* <ServiceSection/> */}

 {/* <AboutSection/> */}
 <AboutSection2/>
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
