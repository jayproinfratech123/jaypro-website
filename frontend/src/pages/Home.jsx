import Hero from "../components/home/Hero.jsx";
import ServicesGrid from "../components/home/ServicesGrid.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import FeaturedProjects from "../components/home/FeaturedProjects.jsx";
import ConstructionProcess from "../components/home/ConstructionProcess.jsx";
import CostCalculator from "../components/home/CostCalculator.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import FAQ from "../components/home/FAQ.jsx";
import Pricing from "./Pricing.jsx";
import TrustedBrands from "../components/TrustedBrands";

const Home = () => {
  return (
    <>
      <Hero />

      <ServicesGrid />

      <ServicesSection />

      <Pricing />
      <TrustedBrands />

      <FeaturedProjects />

      <ConstructionProcess />

      <CostCalculator />

      <WhyChooseUs />

      <Testimonials />

      <FAQ />
    </>
  );
};

export default Home;