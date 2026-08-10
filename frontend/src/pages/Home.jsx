import Hero from "../components/home/Hero.jsx";
import TeamSection from "../components/TeamSection";
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
import LeadForm from "../components/LeadForm";

const Home = () => {
  return (
    <>
      <Hero />
        <LeadForm />

      <LeadPopup />
      <ServicesSection />

      <DesignPackage />

      <Packages />

      <HowItWorks />

      <TrustedBrands />

      <FeaturedProjects />

      <WhyChooseUs />

      <Testimonials />

      <TeamSection />

      <FAQ />

      
    </>
  );
};

export default Home;