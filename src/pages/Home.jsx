// Home1.js
import ClientsSection from '../components/ClientSection';
import FeaturesSection from '../components/FeaturesSection';
import FaqsSection from '../components/FaqsSection';
import TestimonialSection from '../components/TestimonialSection';
import TeamSection from '../components/TeamSection';
import NewsSection from '../components/NewsSection';
import ContractSection from '../components/ContractSection';
import MapSection from '../components/MapSection';
import Header from '../components/Header';
import MainSlider from '../components/MainSlider';
import Preloader from '../components/Preloader';
import ServicesSection4 from '../components/ServicesSection4';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import AboutSection2 from '../components/AboutSection2';
import FeaturesSection2 from '../components/FeaturesSection2';
import { useEffect, useState } from 'react';

const Home1 = () => {
  const [loading, setLoading] = useState(true);

const timeout = setTimeout(() => {
  setLoading(false);
}, 1000);
const handleLoad = () => {
  clearTimeout(timeout); 
  setLoading(false);
};
window.addEventListener('load', handleLoad);


  return (
    <>
      {loading && <Preloader isActive={loading} />}
      {!loading && (
        <div className="page-wrapper">
          <Header />
          <MainSlider />
          <FeaturesSection2 />
          {/* <ServiceSection /> */}
          {/* <AboutSection /> */}
          <AboutSection2 />
          <ServicesSection4 />
          <ClientsSection />
          <FeaturesSection />
          <FaqsSection />
          <TestimonialSection />
          <TeamSection />
          <NewsSection />
          <ContractSection />
          <MapSection />
          <Footer />
        </div>
      )}
      <ScrollToTop />
    </>
  );
};

export default Home1;
