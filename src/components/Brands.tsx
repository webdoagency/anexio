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
              <Card key={index} className="card-shadow hover:shadow-lg transition-shadow border-0 group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 corporate-gradient rounded-2xl flex items-center justify-center mr-6 group-hover:shadow-lg transition-shadow">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl brand-title text-foreground mb-2">{brand.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {brand.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {brand.description}
                  </p>

                  <Button variant="ghost" className="text-primary hover:text-primary-light hover:bg-primary/10 transition-smooth group/btn">
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