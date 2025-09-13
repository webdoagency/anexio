import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Brands />
      <Contact />
    </div>
  );
};

export default Index;