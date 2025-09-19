import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="liquid-glass mt-16">
      <div className="container-width py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl brand-title mb-4">
              ANEXIO GROUP
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Multi-brand business partner connecting enterprises. 
              Building exceptional brands and forging lasting partnerships.
            </p>
            <Button className="corporate-gradient text-white hover:shadow-lg transition-glass">
              <Mail className="w-4 h-4 mr-2" />
              contact@anexiogroup.com
            </Button>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">CONTACT</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center glass-button p-3 rounded-2xl transition-bounce hover:scale-105">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+383 48 878 222</span>
              </div>
              <div className="flex items-center glass-button p-3 rounded-2xl transition-bounce hover:scale-105">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+383 48 878 111</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Anexio Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};