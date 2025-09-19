import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingBag, Settings } from "lucide-react";

const brands = [
  {
    icon: Settings,
    name: "Webdo Agency",
    description: "E-commerce management and digital solutions",
    tags: ["E-commerce", "Management", "Digital"],
    link: "#"
  },
  {
    icon: ShoppingBag, 
    name: "Ballers",
    description: "Premium streetwear for the Balkans",
    tags: ["Streetwear", "Fashion", "Regional"],
    link: "#"
  }
];

export const Brands = () => {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl brand-title mb-6 text-foreground">
            BRANDS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our portfolio of innovative brands across different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {brands.map((brand, index) => {
            const IconComponent = brand.icon;
            return (
              <Card key={index} className="liquid-glass hover:shadow-lg transition-glass border-0 group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 corporate-gradient rounded-3xl flex items-center justify-center mr-6 group-hover:shadow-lg transition-glass">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl brand-title text-foreground mb-2">{brand.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {brand.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 text-xs glass-button text-primary rounded-full transition-bounce hover:scale-105">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {brand.description}
                  </p>

                  <Button variant="ghost" className="glass-button text-primary hover:text-primary-light transition-glass group/btn">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};