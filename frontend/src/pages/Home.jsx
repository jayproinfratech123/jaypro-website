import Hero from "../components/home/Hero.jsx";
import ServicesGrid from "../components/home/ServicesGrid.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import FeaturedProjects from "../components/home/FeaturedProjects.jsx";


import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import FAQ from "../components/home/FAQ.jsx";
import Pricing from "./Pricing.jsx";
import TrustedBrands from "../components/TrustedBrands";
import HowItWorks from "../components/home/HowItWorks";
const Home = () => {
  return (
    <>
      <Hero />

      <ServicesGrid />

      <ServicesSection />

      <Pricing />
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