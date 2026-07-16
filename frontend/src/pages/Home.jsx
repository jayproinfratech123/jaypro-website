import Hero from "../components/home/Hero.jsx";
import ServicesGrid from "../components/home/ServicesGrid.jsx";
import FeaturedProjects from "../components/home/FeaturedProjects.jsx";
import ConstructionProcess from "../components/home/ConstructionProcess.jsx";
import CostCalculator from "../components/home/CostCalculator.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import FAQ from "../components/home/FAQ.jsx";

const Home = () => (
  <>
    <Hero />
    <ServicesGrid />
    <FeaturedProjects />
    <ConstructionProcess />
    <CostCalculator />
    <WhyChooseUs />
    <Testimonials />
    <FAQ />
  </>
);

export default Home;
