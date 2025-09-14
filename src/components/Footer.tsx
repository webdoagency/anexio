import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-width py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-3xl brand-title mb-4 glow-text">
              ANEXIO GROUP
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Multi-brand business partner connecting enterprises. 
              Building exceptional brands and forging lasting partnerships.
            </p>
            <Button className="corporate-gradient text-white hover:glow-effect transition-glow">
              <Mail className="w-4 h-4 mr-2" />
              contact@anexiogroup.com
            </Button>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">PRISHTINA</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>Shaqir Igrishta, 10000</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+383 48 878 222</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">LONDON</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>United Kingdom</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+383 48 878 111</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Anexio Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};