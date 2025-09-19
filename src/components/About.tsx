import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Zap } from "lucide-react";

export const About = () => {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl brand-title mb-6">
            CORPORATE EXCELLENCE
          </h2>
          <div className="liquid-glass p-8 max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We operate at the intersection of innovation and enterprise, 
              building brands that define tomorrow's digital landscape.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="liquid-glass hover:shadow-lg transition-glass border-0 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 corporate-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-glass">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl brand-title mb-4 text-foreground">GLOBAL REACH</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic presence across key markets, connecting enterprises worldwide 
                through innovative solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="liquid-glass hover:shadow-lg transition-glass border-0 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 corporate-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-glass">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl brand-title mb-4 text-foreground">PARTNERSHIP FOCUS</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building lasting relationships through strategic collaboration 
                and mutual growth initiatives.
              </p>
            </CardContent>
          </Card>

          <Card className="liquid-glass hover:shadow-lg transition-glass border-0 group">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 corporate-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-glass">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl brand-title mb-4 text-foreground">INNOVATION DRIVEN</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leveraging cutting-edge technology to create brands that 
                lead markets and define industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};