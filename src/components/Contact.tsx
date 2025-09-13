import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Building } from "lucide-react";

export const Contact = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore partnership opportunities? Connect with us at either 
            of our locations in Prishtina or London.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Prishtina Office */}
          <Card className="card-shadow hover:shadow-lg transition-smooth border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 corporate-gradient rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Anexio Group LLC</h3>
                  <p className="text-primary font-medium">Prishtina Office</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">Shaqir Igrishta, 10000 Prishtina</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">+383 48 878 222</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* London Office */}
          <Card className="card-shadow hover:shadow-lg transition-smooth border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 corporate-gradient rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Anexio Group LTD</h3>
                  <p className="text-primary font-medium">London Office</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">London, United Kingdom</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">+383 48 878 111</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="inline-block card-shadow border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <span className="text-xl font-semibold text-foreground">contact@anexiogroup.com</span>
              </div>
              <Button size="lg" className="corporate-gradient text-white hover:opacity-90 transition-smooth">
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};