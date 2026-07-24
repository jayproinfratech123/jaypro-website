import Hero from "../components/home/Hero.jsx";
import ServicesGrid from "../components/home/ServicesGrid.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import FeaturedProjects from "../components/home/FeaturedProjects.jsx";

import DesignPackage from "../components/home/DesignPackage.jsx";

import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import FAQ from "../components/home/FAQ.jsx";

import TrustedBrands from "../components/TrustedBrands";
import HowItWorks from "../components/home/HowItWorks";

import Packages from "../components/home/packages/Packages.jsx";
import LeadPopup from "../components/LeadPopup";
const Home = () => {
  return (
    <>
    <LeadPopup />
      <Hero />

      <ServicesGrid />

      <ServicesSection />
      <DesignPackage />
      <Packages />
      
      <HowItWorks />
      <TrustedBrands />

      <FeaturedProjects />
      
      <WhyChooseUs />

      <Testimonials />

      <FAQ />
    </>
  );
};

export default Home;