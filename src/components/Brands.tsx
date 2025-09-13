import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingBag, Settings } from "lucide-react";

export const Brands = () => {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each brand in our portfolio represents excellence in its field, 
            driven by innovation and commitment to quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Webdo Agency */}
          <Card className="group card-shadow hover:shadow-xl transition-smooth border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                <div className="w-16 h-16 mb-6 corporate-gradient rounded-full flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Webdo Agency</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Premier ecommerce management provider delivering comprehensive solutions 
                  for online businesses. From setup to scaling, we handle the complete 
                  ecommerce ecosystem.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Ecommerce Management
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Digital Solutions
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Business Growth
                  </span>
                </div>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-smooth">
                  Learn More <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Ballers */}
          <Card className="group card-shadow hover:shadow-xl transition-smooth border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                <div className="w-16 h-16 mb-6 corporate-gradient rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Ballers</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Premium streetwear destination serving Kosovo, Albania, and North Macedonia. 
                  Curating the finest urban fashion with authentic street culture at its core.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Streetwear
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Kosovo • Albania • N. Macedonia
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Urban Fashion
                  </span>
                </div>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-smooth">
                  Shop Now <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};