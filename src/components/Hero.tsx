import { Button } from "@/components/ui/button";
import futuristicBg from "@/assets/futuristic-bg.jpg";
import anexioLogo from "@/assets/anexio-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${futuristicBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95" />
        <div className="absolute inset-0 futuristic-grid" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-width text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={anexioLogo} 
              alt="Anexio Group" 
              className="mx-auto w-80 md:w-96 lg:w-[500px] opacity-95 hover:opacity-100 transition-opacity duration-300"
              style={{ filter: 'drop-shadow(0 0 30px hsl(var(--primary-glow) / 0.3))' }}
            />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Multi-brand business partner connecting enterprises. 
            We build exceptional brands and forge lasting partnerships in the digital future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="corporate-gradient text-white hover:glow-effect transition-glow px-8 py-4 text-lg">
              Explore Brands
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth px-8 py-4 text-lg backdrop-blur-sm">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};