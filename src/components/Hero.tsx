import { Button } from "@/components/ui/button";
import futuristicBg from "@/assets/futuristic-bg.jpg";
import anexioLogo from "@/assets/anexio-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Liquid Glass Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${futuristicBg})` }}
      >
        <div className="absolute inset-0 glass-overlay" />
        <div className="absolute inset-0 liquid-grid" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-width text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 floating-element rounded-3xl p-8">
            <img 
              src={anexioLogo} 
              alt="Anexio Group" 
              className="mx-auto w-80 md:w-96 lg:w-[500px] opacity-95 hover:opacity-100 transition-glass filter drop-shadow-2xl"
            />
          </div>
          
          <div className="liquid-glass p-8 mb-8 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Multi-brand business partner connecting enterprises. 
              We build exceptional brands and forge lasting partnerships in the digital future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};