import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Brands } from "@/components/Brands";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Brands />
      <Footer />
    </div>
  );
};

export default Index;