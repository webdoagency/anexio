import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Multi-Brand Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Operating across two dynamic markets, Anexio Group builds and partners with businesses 
            that define the future of commerce and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="card-shadow hover:shadow-lg transition-smooth border-0">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 corporate-gradient rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Two Locations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic presence in Prishtina and London, connecting Balkan innovation 
                with European markets.
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow hover:shadow-lg transition-smooth border-0">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 corporate-gradient rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Partnership Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't just invest—we partner. Building long-term relationships 
                that drive mutual success and growth.
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow hover:shadow-lg transition-smooth border-0">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 corporate-gradient rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Multi-Brand Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cultivating diverse portfolio of brands across ecommerce, 
                fashion, and business services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};