import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PricingTiers } from "@/components/pricing";
import { Reviews } from "@/components/reviews";
import { StartTrial } from "@/components/start-trial";
const Homepage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Features />
      <Reviews />
      <PricingTiers />
      <StartTrial />
      <Footer />
    </div>
  );
};

export default Homepage;
